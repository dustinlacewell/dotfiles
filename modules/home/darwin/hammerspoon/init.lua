spaces = require("hs._asm.undocumented.spaces")


-- Return the first item for a table of tables
heads = function(table)
    local results = {}
    for k,v in ipairs(table) do
        results[k] = v[1]
    end
    return results
end


-- Hyper Hotkey Modal
modal = hs.hotkey.modal.new({}, nil)


-- Hyper Modal Handling
modalEntered = function()
  modal.triggered = false
  modal:enter()
end

modalExited = function()
  modal:exit()
  if not modal.triggered then
    hs.eventtap.keyStroke({}, 'ESCAPE')
  else
    modal.triggered = false
  end
end


-- Hyper Keybinding
f18 = hs.hotkey.bind({}, 'F18', modalEntered, modalExited)


-- Modal Keybinding Helper
modal_map = function (in_mods, in_keys, out_mods, out_keys)
   modal:bind(in_mods, in_keys, nil, function()
       hs.eventtap.keyStroke(out_mods, out_keys)
       modal.triggered = true
   end)
end

-- Workspace Management
workspaces = {'a', 's', 'd', 'f', 'z', 'x', 'c', 'v'}
for i,key in ipairs(workspaces) do
    local keycode = tostring(i)
    modal_map({}, key, {'ctrl'}, keycode)
    modal_map({'shift'}, key, {'ctrl', 'shift'}, keycode)
end

modal:bind({}, 'e', nil, function()
    filter = hs.window.filter.new(false):setAppFilter("Emacs", {allowTitles="knowt.*"}):setCurrentSpace(nil)
    tbl = filter:getWindows()
    if #tbl > 0 then
      tbl[1]:raise()
      tbl[1]:focus()
    else
      n = hs.task.new("/Users/dustinlacewell/src/knowt/bin/knowt", function(...) end)
      n:start()

      checkp = function()
        tbl = filter:getWindows()
        return #tbl > 0
      end

      action = function(...)
        tbl = filter:getWindows()
        if #tbl > 0 then
          print("Setting fullscreen and raising")
          tbl[1]:setFullScreen(true)
          tbl[1]:raise()
          tbl[1]:focus()
        else
          print("Couldn't find window!")
        end
      end

      hs.timer.doUntil(checkp, action, 1.0):start()
    end
end)

screens = {'1', '2', '3', '4'}
for i,key in ipairs(screens) do
   modal_map({}, key, {'cmd', 'alt', 'ctrl'}, key)
   modal_map({'shift'}, key, {'cmd', 'alt', 'ctrl', 'shift'}, key)
end

otherBindings = {'r', 't', 'i', 'm', 'h', 'j', 'k', 'l', 'space'}
for i,key in ipairs(otherBindings) do
   modal_map({}, key, {'cmd', 'alt', 'ctrl'}, key)
   modal_map({'shift'}, key, {'cmd', 'alt', 'ctrl', 'shift'}, key)
end

-- iTerm Management
modal:bind({}, 'return', nil, function()
      hs.execute("open -n -a iTerm2.app --args /Users/dustinlacewell")
end)

-- Emacs Management
modal:bind({'shift'}, 'o', nil, function()
      n = hs.task.new("/Users/dustinlacewell/src/knowt/bin/knowt", function(...) end)
      n:start()
      w = hs.window.find("knowt.org")
      if w then w:setFullscreen(true) end
end)

modal:bind({}, 'o', nil, function()
      hs.execute("open -n -a ~/.nix-profile/Applications/Emacs.app/Contents/MacOS/Emacs", true)
end)

-- Automatic Config Reload
function reloadConfig(files)
    doReload = false
    for _,file in pairs(files) do
        if file:sub(-4) == ".lua" then
            doReload = true
        end
    end
    if doReload then
        hs.reload()
    end
end


-- Window-Space Constraints
-- configs = {
--   {"HipChat", 6},
--   {"Textual IRC Client", 7},
--   {"Google Chrome", 3}
-- }

-- wf = hs.window.filter
-- windows = wf.new(heads(configs))
-- windows:subscribe({wf.windowCreated, wf.windowMoved}, (function(window, appName)
--     for idx,item in ipairs(configs) do
--         if item[1] == appName then
--             window:spacesMoveTo(item[2])
--             hs.eventtap.keyStroke({'cmd', 'alt', 'ctrl', 'shift'}, 'r')
--         end
--     end
-- end), false)


-- Current Application Name Helper
modal:bind({}, 'n', nil, function()
    hs.alert.show(hs.application.frontmostApplication():name())
    modal.triggered = true
end)

-- Emacs forward-word and backwards-word
modal:bind({'alt'}, 'f', nil, function()
      hs.alert.show("Forward word")
      hs.eventtap.keyStroke({'option'}, keyCode('right'))
end)
modal:bind({'alt'}, 'b', nil, function()
      hs.eventtap.keyStroke({'option'}, keyCode('left'))
end)


local config = os.getenv("HOME") .. "/.hammerspoon/init.lua"
myWatcher = hs.pathwatcher.new(config, reloadConfig):start()
-- hs.alert.show("Reloaded Hammerspoon.")

-- hs.osascript.applescript([[
-- ignoring application responses
--   tell application "System Events"
--     click menu bar item 1 of menu bar 1 of application process "Amethyst"
--   end tell
-- end ignoring
-- do shell script "killall System\\ Events"
-- delay 0.05
-- tell application "System Events"
--   click menu item "Relaunch Amethyst" of menu 1 of menu bar item 1 of menu bar 1 of application process "Amethyst"
-- end tell
-- ]])



