(with-eval-after-load 'org
  (setq org-confirm-babel-evaluate nil)
  (setq org-confirm-shell-link-function nil)
  (setq org-confirm-elisp-link-function nil))

;;; -*- lexical-binding: t; -*-

(let ((bootstrap-file (concat user-emacs-directory "straight/repos/straight.el/bootstrap.el"))
      (bootstrap-version 3))
  (unless (file-exists-p bootstrap-file)
    (with-current-buffer
        (url-retrieve-synchronously
         "https://raw.githubusercontent.com/raxod502/straight.el/develop/install.el"
         'silent 'inhibit-cookies)
      (goto-char (point-max))
      (eval-print-last-sexp)))
  (load bootstrap-file nil 'nomessage))

(setq straight-use-package-by-default t)
(straight-use-package 'use-package)
(use-package git) ;; ensure we can install from git sources

(require 'cl)
(use-package dash :config (require 'dash))    ;; lists
(use-package ht :config (require 'ht))        ;; hash-tables
(use-package s :config (require 's))          ;; strings
(use-package a :config (require 'a))          ;; association lists

(defvar my/org-path-name
  (expand-file-name "~/org/")
  "Root path-name for org-mode files")

(defun my/org-file-name (file-name)
  "Create file-name relative to my/org-path-name"
  (concat my/org-path-name file-name))

(defvar my/notes-file-name
  (my/org-file-name "notes.org")
  "Main notes file-name")

(defvar my/bookmarks-file-name
  (my/org-file-name "bookmarks.org")
  "Main bookmarks file-name")

(setq-default my/template-directory (concat my/org-path-name "templates/"))

(defun my/template-file-name (file-name)
  "Create file-name relative to my/template-directory"
  (concat my/template-directory file-name))

(setq-default my/project-root (expand-file-name "~/src/"))

(defun my/project-directory (name)
  (concat my/project-root name))

(setq browse-url-browser-function 'browse-url-chrome)
(setq browse-url-chrome-program "qutebrowser")

(setq exec-path-from-shell-check-startup-files nil)

(load-file "/home/ldlework/.emacs.d/theme.el")
(enable-theme 'xresources)

(defun theme-callback (event)
  (load-file "~/.cache/wal/theme.el")
  (set-eyeliner-colors)
  (eyeliner/install)
  (enable-theme 'xresources))

(require 'filenotify)
(file-notify-add-watch
  "/home/ldlework/.cache/wal/theme.el" '(change) 'theme-callback)

(setq powerline-height 32)
(set-face-attribute 'default nil :family "Source Code Pro" :weight 'light)

(set-face-foreground 'vertical-border "gray")

(set-face-attribute 'fringe nil :background nil)

(setq auto-save-default t)

(setq auto-save-timeout 20
      auto-save-interval 20)

(defvar emacs-autosave-directory
  (concat user-emacs-directory "autosaves/"))

(unless (file-exists-p emacs-autosave-directory)
    (make-directory emacs-autosave-directory))

(setq auto-save-file-name-transforms
      `((".*" ,emacs-autosave-directory t)))

(setq backup-directory-alist `((".*" . ,emacs-autosave-directory)))

(setq kept-new-versions 10
      kept-old-verisons 0)

(setq delete-old-versions t)

(setq backup-by-copying t)

(setq vc-make-backup-files t)

(use-package backup-each-save
  :config (add-hook 'after-save-hook 'backup-each-save))

(setq-default cursor-type 'box)

(blink-cursor-mode 1)

(menu-bar-mode -1)

(tool-bar-mode -1)

(scroll-bar-mode -1)

(setq inhibit-startup-message t
      initial-scratch-message nil)

(setq custom-file (make-temp-file ""))

(setq-default indent-tabs-mode nil)

(use-package visual-fill-column
  :config (global-visual-fill-column-mode))

(setq-default fill-column 79)

(add-hook 'text-mode-hook 'turn-on-auto-fill)

(setq tramp-default-method "ssh")

(global-set-key (kbd "M-p") 'backward-paragraph)
(global-set-key (kbd "M-n") 'forward-paragraph)

(use-package whitespace
  :diminish global-whitespace-mode
  :init
  (setq whitespace-style
        '(face tabs newline trailing tab-mark space-before-tab space-after-tab))
  (global-whitespace-mode 1))

(global-prettify-symbols-mode 1)

(electric-pair-mode 1)

(require 'color)
(defun gen-col-list (length s v &optional hval)
  (cl-flet ( (random-float () (/ (random 10000000000) 10000000000.0))
          (mod-float (f) (- f (ffloor f))) )
    (unless hval
      (setq hval (random-float)))
    (let ((golden-ratio-conjugate (/ (- (sqrt 5) 1) 2))
          (h hval)
          (current length)
          (ret-list '()))
      (while (> current 0)
        (setq ret-list
              (append ret-list
                      (list (apply 'color-rgb-to-hex (color-hsl-to-rgb h s v)))))
        (setq h (mod-float (+ h golden-ratio-conjugate)))
        (setq current (- current 1)))
      ret-list)))

(defun set-random-rainbow-colors (s l &optional h)
  ;; Output into message buffer in case you get a scheme you REALLY like.
  ;; (message "set-random-rainbow-colors %s" (list s l h))
  (interactive)
  (rainbow-delimiters-mode t)

  ;; Show mismatched braces in bright red.
  (set-face-background 'rainbow-delimiters-unmatched-face "red")

  ;; Rainbow delimiters based on golden ratio
  (let ( (colors (gen-col-list 9 s l h))
         (i 1) )
    (let ( (length (length colors)) )
      ;;(message (concat "i " (number-to-string i) " length " (number-to-string length)))
      (while (<= i length)
        (let ( (rainbow-var-name (concat "rainbow-delimiters-depth-" (number-to-string i) "-face"))
               (col (nth i colors)) )
          ;; (message (concat rainbow-var-name " => " col))
          (set-face-foreground (intern rainbow-var-name) col))
        (setq i (+ i 1))))))

(use-package rainbow-delimiters :commands rainbow-delimiters-mode :hook ...
  :init
  (setq rainbow-delimiters-max-face-count 16)
  (set-random-rainbow-colors 0.6 0.7 0.5)
  (add-hook 'prog-mode-hook 'rainbow-delimiters-mode))

(show-paren-mode 1)
(setq show-paren-delay 0)
(require 'paren)
(set-face-background 'show-paren-match nil)
(set-face-background 'show-paren-mismatch nil)
(set-face-foreground 'show-paren-match "#ff0")
(set-face-foreground 'show-paren-mismatch "#f00")
(set-face-attribute 'show-paren-match nil :weight 'extra-bold)

(use-package which-key
  :diminish which-key-mode
  :config
  ;; sort single chars alphabetically P p Q q
  (setq which-key-sort-order 'which-key-key-order-alpha)
  (setq which-key-idle-delay 0.8)
  (which-key-mode))

(use-package company
  :config (add-hook 'after-init-hook 'global-company-mode))

(setq ispell-program-name (expand-file-name "~/.nix-profile/bin/aspell"))

(fset 'yes-or-no-p 'y-or-n-p)

(defun set-eyeliner-colors ()
  (setq buffer-name-color "#ff0000")
  (setq buffer-name-modified-color "#ff0000")
  (setq eyeliner/warm-color (theme-color 'red))
  (setq eyeliner/cool-color (theme-color 'cyan))
  (setq eyeliner/plain-color (theme-color 'foreground))
  (custom-set-faces
   `(powerline-active0
     ((t (:background ,(theme-color 'foreground)))))
   `(powerline-inactive0
     ((t (:background ,(theme-color 'foreground)))))
   `(powerline-active1
     ((t (:background ,(theme-color 'foreground)
                      :foreground ,(theme-color 'background)))))
   `(powerline-inactive1
     ((t (:background ,(theme-color 'foreground)
                      :foreground ,(theme-color 'background)))))
   `(powerline-active2
     ((t (:background ,(theme-color 'background)))))
   `(powerline-inactive2
     ((t (:background ,(theme-color 'background)))))))

(use-package eyeliner
  ;; :straight (eyeliner :type git :host github :repo "dustinlacewell/eyeliner")
  :straight (eyeliner :local-repo "~/src/eyeliner")
  :config
  (require 'eyeliner)
  (spaceline-helm-mode 1)
  (set-eyeliner-colors)
  (eyeliner/install))

(setq debug-on-error t)

(use-package prodigy)
(prodigy-define-service
  :name "Hugo Personal Blog"
  :command "hugo"
  :args '("server" "-D" "--navigateToChanged")
  :cwd "~/blog/"
  :stop-signal 'sigkill
  :kill-process-buffer-on-stop t)

(defun fix-org-git-version ()
  "The Git version of org-mode.
  Inserted by installing org-mode or when a release is made."
  (require 'git)
  (let ((git-repo (expand-file-name
                   "straight/repos/org/" user-emacs-directory)))
    (string-trim
     (git-run "describe"
              "--match=release\*"
              "--abbrev=6"
              "HEAD"))))

(defun fix-org-release ()
  "The release version of org-mode.
  Inserted by installing org-mode or when a release is made."
  (require 'git)
  (let ((git-repo (expand-file-name
                   "straight/repos/org/" user-emacs-directory)))
    (string-trim
     (string-remove-prefix
      "release_"
      (git-run "describe"
               "--match=release\*"
               "--abbrev=0"
               "HEAD")))))

(use-package org
  :mode ("\\.org\\'" . org-mode)
  :config
  ;; This forces straight to load the package immediately in an attempt to avoid the
  ;; Org that ships with Emacs.
  (require 'org)

  ;; these depend on the 'straight.el fixes' above
  (defalias #'org-git-version #'fix-org-git-version)
  (defalias #'org-release #'fix-org-release)

  ;; Enable org capture
  (require 'org-capture)

  ;; Enable templates like <s
  (require 'org-tempo))

(with-eval-after-load 'org
  (add-hook 'org-mode-hook #'org-indent-mode))

(use-package org-bullets
  :after (org)
  :config
  (add-hook 'org-mode-hook 'org-bullets-mode))

(with-eval-after-load 'org
  (setq org-todo-keywords '((sequence "TODO" "DOING" "|" "DONE"))))

(with-eval-after-load 'org
  (defun nougat/org-pretty-compose-p (start end match)
    (if (or (string= match "[#A]") (string= match "[#C]"))
        ;; prettify asterisks in headings
        (org-match-line org-outline-regexp-bol)
      ;; else rely on the default function
      (funcall #'prettify-symbols-default-compose-p start end match)))

  (global-prettify-symbols-mode)

  (add-hook
   'org-mode-hook
   (lambda ()
     (setq-local prettify-symbols-compose-predicate #'nougat/org-pretty-compose-p)
     (setq-local prettify-symbols-alist
                 '(("[#A]" . ?↟)
                   ("[#C]" . ?↡)
                   ("TODO" . ?…)
                   ("DOING". ?⏩)
                   ("DONE". ?✔))))))

(with-eval-after-load 'org
  (setq org-ellipsis " ▿"))

(defun org-realign-tags ()
  (interactive)
  (setq org-tags-column (- 0 (window-width)))
  (org-align-tags t))

(add-hook 'window-configuration-change-hook 'org-realign-tags)

(use-package org-beautify-theme
  :after (org)
  :config
  (setq org-fontify-whole-heading-line t)
  (setq org-fontify-quote-and-verse-blocks t)
  (setq org-hide-emphasis-markers t))

(with-eval-after-load 'org
  (setq org-hide-block-startup nil))

(with-eval-after-load 'org
  (add-hook 'org-mode-hook 'turn-on-auto-fill))

(with-eval-after-load 'org
  (setq org-insert-heading-respect-content nil))

(with-eval-after-load 'org
  (defun org-mode--ensure-one-blank-line ()
    (save-excursion
      (goto-char (point-min))
      (while (re-search-forward "#\\+[a-z_]+\\s-\\*" nil t)
        (replace-match "#+end_src

*")
        (call-interactively 'org-previous-visible-heading)
        (call-interactively 'org-cycle)
        (call-interactively 'org-cycle))
      (org-save-outline-visibility t
        (org-mode))))

  (add-hook
   'org-mode-hook
   (lambda () (add-hook
               'before-save-hook
               'org-mode--ensure-one-blank-line
               nil 'make-it-local))))

(setq org-startup-folded 'content)

(with-eval-after-load 'org
  (org-babel-do-load-languages
   'org-babel-load-languages
   '((shell . t)
     (emacs-lisp . t))))

(with-eval-after-load 'org
  (setq org-babel-default-header-args
        '((:session . "none")
          (:results . "silent")
          (:exports . "code")
          (:cache . "no")
          (:noweb . "no")
          (:hlines . "no")
          (:tangle . "no"))))

(with-eval-after-load 'org
  (setq org-default-notes-file
        (expand-file-name "~/org/notes.org")))

(with-eval-after-load 'org
  (global-set-key (kbd "C-c c") 'org-capture))

(with-eval-after-load 'org
  (add-to-list 'org-capture-after-finalize-hook 'org-capture-goto-last-stored))

(setq org-agenda-prefix-format
      (quote ((agenda . " %i %-12:c%?-12t% s")
              (timeline . "  % s")
              (todo .
                    " %i %-12:c %(concat \"[ \"(org-format-outline-path (org-get-outline-path)) \" ]\") ")
              (tags .
                    " %i %-12:c %(concat \"[ \"(org-format-outline-path (org-get-outline-path)) \" ]\") ")
              (search . " %i %-12:c"))))

(use-package linkmarks
  :straight (linkmarks :type git :local-repo "~/src/linkmarks/" :files ("linkmarks.el")))

(use-package org-ql
  :straight (org-ql :type git :host github :repo "alphapapa/org-ql"))

(use-package org-olp
  :straight (org-olp :type git :local-repo "~/src/org-olp")
  :config (require 'org-olp))


(defun get-candidates (filename query)
  (let* ((headlines (eval `(org-ql ,filename ,query)))
         (items (--map (plist-get it 'headline) headlines))
         (items (--sort (< (plist-get it :begin)
                           (plist-get other :begin)) items)))
    (cl-loop for item in items
             for olp = (with-temp-buffer
                         (insert-file-contents filename)
                         (org-mode)
                         (goto-char (plist-get item :begin))
                         (org-get-outline-path t))
             for label = (string-join olp " / ")
             collect (list label item))))

;; (get-candidates "~/org/notes.org" '(todo "TODO"))

(defun select-candidate (filename query)
  (let* ((candidates (get-candidates filename query)))
    (car (helm :sources
               (helm-build-sync-source "active-todos"
                 :candidates candidates
                 :fuzzy-match t)))))

;; (select-candidate "~/org/notes.org" '(todo "TODO"))

(defun visit-candidate (filename query)
  (let ((selection (select-candidate filename query)))
    (find-file filename)
    (goto-char (plist-get selection :begin))
    (beginning-of-line)
    (call-interactively 'org-shifttab)
    (call-interactively 'org-cycle)))

;; (visit-candidate my/notes-file-name '(todo))

(defun i-read-this ()
  (interactive)
  (org-entry-add-to-multivalued-property nil "readby" user-login-name))

(setq safe-local-variable-values '((org-confirm-elisp-link-function . nil)))

(use-package projectile
  :config
  (setq projectile-enable-caching t)
  (projectile-mode t))

(projectile-discover-projects-in-directory
 (file-name-as-directory
  (expand-file-name "~/src")))

(use-package helm
  :config
  (helm-mode 1)
  (require 'helm-config)

  (global-set-key (kbd "M-x") 'helm-M-x)
  (global-set-key (kbd "C-h f") 'helm-apropos)
  (global-set-key (kbd "C-x C-f") 'helm-find-files)
  (global-set-key (kbd "C-x b") 'helm-mini)
  (global-set-key (kbd "C-c y") 'helm-show-kill-ring)
  (global-set-key (kbd "C-x C-r") 'helm-recentf))

(with-eval-after-load 'helm
  (use-package ace-jump-helm-line
    :commands ace-jump-helm-line
    :config (define-key helm-map
            (kbd "M-;")
            'ace-jump-helm-line)))

(with-eval-after-load 'helm
  (require 'helm-bookmark)
  (global-set-key (kbd "C-x C-b") 'helm-bookmark))

(use-package helm-descbinds
  :after (helm)
  :commands helm-descbinds
  :config
  (global-set-key (kbd "C-h b") 'helm-descbinds))

(use-package helm-flyspell
  :after (helm)
  :commands helm-flyspell-correct
  :config (global-set-key (kbd "C-;") 'helm-flyspell-correct))

(use-package helm-org-rifle
  :after (helm org)
  :commands helm-org-rifle-current-buffer
  :config
  (define-key org-mode-map (kbd "M-r") 'helm-org-rifle-current-buffer))

(use-package helm-projectile
    :after (helm projectile)
    :commands helm-projectile
    :config
    (global-set-key (kbd "C-x c p") 'helm-projectile))

(defvar helm-full-frame-threshold 0.75)

(defun helm-full-frame-hook ()
  (let ((threshold (* helm-full-frame-threshold (x-display-pixel-height))))
    (setq helm-full-frame (< (frame-height) threshold))))

(add-hook 'helm-before-initialize-hook 'helm-full-frame-hook)

(require 'helm-external)
(setq helm-external-commands-list
      (seq-filter (lambda (v) (not (string-match "^\\." v)))
                  (helm-external-commands-list-1 'sort)))

(set-face-attribute
 'helm-selection nil
 :inherit t
 :background (theme-color 'blue)
 :foreground (theme-color 'background)
 :height 1.0
 :weight 'ultra-bold
 :inverse-video nil)

(set-face-attribute
 'helm-source-header nil
 :inherit nil
 :underline nil
 :background (theme-color 'background)
 :foreground (theme-color 'light-red)
 :height 1.9)

(set-face-attribute
 'helm-header nil
 :inherit nil
 :height 0.8
 :background (theme-color 'background)
 :foreground (theme-color 'cyan))

(set-face-attribute
 'helm-separator nil
 :height 0.8
 :foreground (theme-color 'light-red))

(set-face-attribute
 'helm-match nil
 :weight 'bold
 :foreground (theme-color 'green))

(use-package magit
  :config
  (require 'magit)
  (global-set-key (kbd "C-x g") 'magit-status))

(defun advice-unadvice (sym)
  "Remove all advices from symbol SYM."
  (interactive "aFunction symbol: ")
  (advice-mapc (lambda (advice _props) (advice-remove sym advice)) sym))

(defun elfeed-font-size-hook ()
  (buffer-face-set '(:height 1.35)))

(defun elfeed-visual-fill-hook ()
  (visual-fill-column-mode--enable))

(defun elfeed-show-refresh-advice (entry)
  (elfeed-font-size-hook)
  (visual-fill-column-mode 1)
  (setq word-wrap 1)
  (elfeed-show-refresh))

(defun elfeed-show ()
  (interactive)
  (elfeed)
  (delete-other-windows))

(use-package elfeed
  :bind (("C-x w" . elfeed-show))
  :config
  (add-hook 'elfeed-search-update-hook 'elfeed-font-size-hook)
  (advice-unadvice 'elfeed-show-entry)
  (advice-add 'elfeed-show-entry :after 'elfeed-show-refresh-advice))

(use-package elfeed-org
  :after (elfeed)
  :config
  (elfeed-org)
  (setq rmh-elfeed-org-files (list "~/org/notes.org")))

(use-package flycheck
  :config (global-flycheck-mode))

(defun toggle-context-help ()
  "Turn on or off the context help.
Note that if ON and you hide the help buffer then you need to
manually reshow it. A double toggle will make it reappear"
  (interactive)
  (with-current-buffer (help-buffer)
    (unless (local-variable-p 'context-help)
      (set (make-local-variable 'context-help) t))
    (if (setq context-help (not context-help))
        (progn
           (if (not (get-buffer-window (help-buffer)))
               (display-buffer (help-buffer)))))
    (message "Context help %s" (if context-help "ON" "OFF"))))

(defun context-help ()
  "Display function or variable at point in *Help* buffer if visible.
Default behaviour can be turned off by setting the buffer local
context-help to false"
  (interactive)
  (let ((rgr-symbol (symbol-at-point))) ; symbol-at-point http://www.emacswiki.org/cgi-bin/wiki/thingatpt%2B.el
    (with-current-buffer (help-buffer)
     (unless (local-variable-p 'context-help)
       (set (make-local-variable 'context-help) t))
     (if (and context-help (get-buffer-window (help-buffer))
         rgr-symbol)
       (if (fboundp  rgr-symbol)
           (describe-function rgr-symbol)
         (if (boundp  rgr-symbol) (describe-variable rgr-symbol)))))))

(defadvice eldoc-print-current-symbol-info
  (around eldoc-show-c-tag activate)
  (cond
        ((eq major-mode 'emacs-lisp-mode) (context-help) ad-do-it)
        ((eq major-mode 'lisp-interaction-mode) (context-help) ad-do-it)
        ((eq major-mode 'apropos-mode) (context-help) ad-do-it)
        (t ad-do-it)))

(global-set-key (kbd "C-c h") 'toggle-context-help)

(use-package lispy
  :config
  (add-hook 'emacs-lisp-mode-hook (lambda () (lispy-mode 1)))
  (add-hook 'lisp-interaction-mode-hook (lambda () (lispy-mode 1))))

(use-package markdown-mode
  :commands (markdown-mode gfm-mode)
  :mode (("README\\.md\\'" . gfm-mode)
         ("\\.md\\'" . markdown-mode)
         ("\\.markdown\\'" . markdown-mode))
  :config (setq markdown-command "multimarkdown"))

(use-package elpy)

(use-package jedi
  :init
  (progn
    (add-hook 'python-mode-hook 'jedi:setup)
    (setq jedi:complete-on-dot t)))

(use-package typescript-mode)

(defun setup-tide-mode ()
  (interactive)
  (tide-setup)
  (flycheck-mode +1)
  (setq flycheck-check-syntax-automatically '(save mode-enabled))
  (eldoc-mode +1)
  (tide-hl-identifier-mode +1)
  (company-mode +1))

(use-package tide
  :config
  (add-hook 'before-save-hook 'tide-format-before-save)
  (add-hook 'typescript-mode-hook #'setup-tide-mode))

(use-package web-mode
  :config
  (require 'web-mode)
  (add-to-list 'auto-mode-alist '("\\.tsx\\'" . web-mode))
  (add-to-list 'auto-mode-alist '("\\.html?\\'" . web-mode))
  (setq web-mode-engines-alist
        '(("django"    . "\\.html\\'")))
  (add-hook 'web-mode-hook
            (lambda ()
              (when (string-equal "tsx" (file-name-extension buffer-file-name))
                (setup-tide-mode))))
  ;; enable typescript-tslint checker
  (flycheck-add-mode 'typescript-tslint 'web-mode))

(use-package yaml-mode
  :config
  (require 'yaml-mode)
  (add-to-list 'auto-mode-alist '("\\.yml\\'" . yaml-mode)))

(with-eval-after-load 'fsharp-mode
  (add-to-list 'exec-path "/nix/var/nix/profiles/default/bin")
  (add-to-list 'exec-path (expand-file-name "~/.nix-profile/bin"))
  (add-to-list 'auto-mode-alist '("\\.fs[iylx]?$" . fsharp-mode)))

(use-package less-css-mode)

(use-package web-mode
  :config
  (add-to-list 'auto-mode-alist '("\\.html\\'" . web-mode)))

(use-package go-mode
  :config (add-hook 'go-mode-hook
                    (lambda ()
                      (add-hook 'before-save-hook 'gofmt-before-save)
                      (setq tab-width 4)
                      (setq indent-tabs-mode 1))))

(use-package dockerfile-mode
  :config
  (require 'dockerfile-mode)
  (add-to-list 'auto-mode-alist '("Dockerfile\\'" . dockerfile-mode)))

(defun nix-mode-make-regexp (parts)
  (declare (indent defun))
  (string-join parts "\\|"))

(defun nix-mode-search-backward ()
  (re-search-backward nix-mode-combined-regexp nil t))

(setq nix-mode-caps '(" =[ \n]" "\(" "\{" "\\[" "\\bwith " "\\blet\\b" "\\binherit\\b"))
(setq nix-mode-ends '(";" "\)" "\\]" "\}" "\\bin\\b"))
(setq nix-mode-quotes '("''" "\""))
(setq nix-mode-caps-regexp (nix-mode-make-regexp nix-mode-caps))
(setq nix-mode-ends-regexp (nix-mode-make-regexp nix-mode-ends))
(setq nix-mode-quotes-regexp (nix-mode-make-regexp nix-mode-quotes))
(setq nix-mode-combined-regexp (nix-mode-make-regexp (append nix-mode-caps nix-mode-ends nix-mode-quotes)))

(defun fixed-nix-indent-expression-start ()
  (let* ((ends 0)
         (once nil)
         (done nil)
         (indent (current-indentation)))
    (save-excursion
      ;; we want to indent this line, so we don't care what it contains
      ;; skip to the beginning so reverse searching doesn't find any matches within
      (beginning-of-line)
      ;; search backward until an unbalanced cap is found or no cap or end is found
      (while (and (not done) (nix-mode-search-backward))
        (cond
         ((looking-at nix-mode-quotes-regexp)
          ;; skip over strings entirely
          (re-search-backward nix-mode-quotes-regexp nil t))
         ((looking-at nix-mode-ends-regexp)
          ;; count the matched end
          ;; this means we expect to find at least one more cap
          (setq ends (+ ends 1)))
         ((looking-at nix-mode-caps-regexp)
          ;; we found at least one cap
          ;; this means our function will return true
          ;; this signals to the caller we handled the indentation
          (setq once t)
          (if (> ends 0)
              ;; this cap corresponds to a previously matched end
              ;; reduce the number of unbalanced ends
              (setq ends (- ends 1))
            ;; no unbalanced ends correspond to this cap
            ;; this means we have found the expression that contains our line
            ;; we want to indent relative to this line
            (setq indent (current-indentation))
            ;; signal that the search loop should exit
            (setq done t))))))
    ;; done is t when we found an unbalanced expression cap
    (when done
      ;; indent relative to the indentation of the expression containing our line
      (indent-line-to (+ tab-width indent)))
    ;; return t to the caller if we found at least one cap
    ;; this signals that we handled the indentation
    once))

(defun nix-mode-format ()
  "Format the entire nix-mode buffer"
  (interactive)
  (when (eq major-mode 'nix-mode)
    (save-excursion
      (beginning-of-buffer)
      (while (not (equal (point) (point-max)))
        (if (equal (string-match-p "^[\s-]*$" (thing-at-point 'line)) 0)
            (delete-horizontal-space)
          (nix-indent-line))
        (next-line)))))

(use-package nix-mode
  :straight (nix-mode :type git :local-repo "~/src/nix-mode")
  ;:straight (nix-mode :type git :host github :repo "NixOS/nix-mode")
  :config
  (add-to-list 'auto-mode-alist '("\\.nix?\\'" . nix-mode))
  (add-hook 'before-save-hook #'nix-mode-format)
  (define-key nix-mode-map (kbd "TAB") 'nix-indent-line)
  (setq nix-indent-function 'nix-indent-line)
  (defalias
    #'nix-indent-expression-start
    #'fixed-nix-indent-expression-start))

(use-package nix-sandbox)

(use-package yasnippet
  :config
  (setq yas-snippet-dirs '("/nixcfg/unmanaged/yasnippet/"))
  (yas-global-mode 1))

(use-package hydra)

(use-package pretty-hydra
  :straight (pretty-hydra :type git :host github
                          :repo "jerrypnz/major-mode-hydra.el"
                          :files ("pretty-hydra.el"))
  :config
  (require 'pretty-hydra))

(use-package major-mode-hydra
  :straight (major-mode-hydra
             :type git :host github
             :repo "jerrypnz/major-mode-hydra.el"
             :files ("major-mode-hydra.el"))
  :config
  (require 'major-mode-hydra)
  (global-set-key (kbd "C-<f19>") 'majorb-mode-hydra))

(use-package hera
  :straight (hera :type git :host github :repo "dustinlacewell/hera")
  :config
  (require 'hera))

(defun nougat--inject-hint (symbol hint)
  (-let* ((name (symbol-name symbol))
          (hint-symbol (intern (format "%s/hint" name)))
          (format-form (cadr (eval hint-symbol)))
          (string-cdr (nthcdr 1 format-form))
          (format-string (string-trim (car string-cdr)))
          (amended-string (format "%s\n\n%s" format-string hint)))
    (setcar string-cdr amended-string)))

(defun nougat--make-head-hint (head default-color)
  (-let (((key _ hint . rest) head))
    (when key
      (-let* (((&plist :color color) rest)
              (color (or color default-color))
              (face (intern (format "hydra-face-%s" color)))
              (propertized-key (propertize key 'face face)))
        (format " [%s]: %s" propertized-key hint)))))

(defun nougat--make-hint (heads default-color)
  (string-join
   (cl-loop for head in heads
            for hint = (nougat--make-head-hint head default-color)
            do (pp hint)
            collect hint) "\n"))

(defun nougat--clear-hint (head)
  (-let* (((key form _ . rest) head))
    `(,key ,form nil ,@rest)))

(defun nougat--add-exit-head (heads)
  (let ((exit-head '("SPC" (hera-pop) "to exit" :color blue)))
    (append heads `(,exit-head))))

(defun nougat--add-heads (columns extra-heads)
  (let* ((cell (nthcdr 1 columns))
         (heads (car cell))
         (extra-heads (mapcar 'nougat--clear-hint extra-heads)))
    (setcar cell (append heads extra-heads))))

(defmacro nougat-hydra (name body columns &optional extra-heads)
  (declare (indent defun))
  (-let* (((&plist :color default-color :major-mode mode) body)
          (extra-heads (nougat--add-exit-head extra-heads))
          (extra-hint (nougat--make-hint extra-heads default-color))
          (body (plist-put body :hint nil))
          (body-name (format "%s/body" (symbol-name name)))
          (body-symbol (intern body-name))
          (mode-support
           `(when ',mode
              (setq major-mode-hydra--body-cache
                    (a-assoc major-mode-hydra--body-cache ',mode ',body-symbol)))))
    (nougat--add-heads columns extra-heads)
    (when mode
      (remf body :major-mode))
    `(progn
       (pretty-hydra-define ,name ,body ,columns)
       (nougat--inject-hint ',name ,extra-hint)
       ,mode-support)))

;; (nougat-hydra hydra-test (:color red :major-mode fundamental-mode)
;;   ("First"
;;    (("a" (message "first - a") "msg a" :color blue)
;;     ("b" (message "first - b") "msg b"))
;;    "Second"
;;    (("c" (message "second - c") "msg c" :color blue)
;;     ("d" (message "second - d") "msg d"))))

(defun my/hydra-dwim ()
  (interactive)
  (-let (((&alist major-mode mode) major-mode-hydra--body-cache))
    (if mode (progn
               (push 'hydra-default/body hera--stack)
               (major-mode-hydra))
      (hera-start 'hydra-default/body))))

(setq kbd-hera-pop "<f12>")
(global-set-key (kbd "<f12>") 'my/hydra-dwim)
(global-set-key (kbd "M-<f12>") (lambda () (interactive) (hera-start 'hydra-default/body)))

(require 'seq)

(defun helm-org-bm--element (regexp)
  (search-forward-regexp regexp)
  (next-line)
  (org-element-context))

(defun helm-org-bm--format (element)
  (format "[[%s]]" (plist-get (nth 1 element) :raw-link)))

(defun helm-org-bm--filter-candidates (canididates)
  (cl-loop for c in candidates
           for label = (nth 0 c)
           for regexp = (nth 2 c)
           for element = (helm-org-bm--element regexp)
           if (equal 'link (car element))
           collect (list label (helm-org-bm--format element))))

(defun helm-org-bm--get-bookmarks ()
  (let* ((org-refile-targets '((nil :maxlevel . 99)))
         (candidates (org-refile-get-targets)))
    (helm-org-bm--filter-candidates candidates)))

(defun helm-org-bm--pick-bookmark (targets)
  (let ((choice (completing-read ">" (mapcar 'car targets))))
    (seq-find (lambda (i) (string-equal choice (car i))) targets)))

(defun helm-org-bm-bookmark ()
  (interactive)
  (save-excursion
    (with-temp-buffer
      (insert-file-contents "~/org/bookmarks.org")
      (org-mode)
      (outline-show-all)
      (beginning-of-buffer)
      (let* ((targets (helm-org-bm--get-bookmarks))
             (choice (helm-org-bm--pick-bookmark targets))
             (org-link-frame-setup '((file . find-file)))
             (org-confirm-elisp-link-function nil))
        (org-open-link-from-string (cadr choice) (current-buffer))))))

(defun helm-org-bm-capture ()
  (interactive)
  (let ((org-capture-entry helm-org-bm-entry))
    (setq org-refile-use-outline-path t)
    (setq org-outline-path-complete-in-steps nil)
    (setq org-refile-targets '((nil :maxlevel . 99)))
    (ignore-errors (org-capture))))

(setq helm-org-bm-entry
      '("t" "Bookmark" entry (file "~/org/bookmarks.org")
        "* %^{Title}\n[[%?]]\n  added: %U" '(:kill-buffer)))

(setq helm-org-bm-actions
      '(("Open bookmark" . helm-org-bm--goto)
        ("Go to heading" . helm-org-goto-marker)
        ("Open in indirect buffer `C-c i'" .
         helm-org--open-heading-in-indirect-buffer)
        ("Refile heading(s) `C-c w`" .
         helm-org--refile-heading-to)
        ("Insert link to this heading `C-c l`" .
         helm-org-insert-link-to-heading-at-marker)))

(nougat-hydra hydra-bookmarks (:color blue)
  ("Bookmarks" (("n" (helm-org-bm-capture) "new")
                ("b" (helm-org-bm-bookmark) "bookmarks"))))

(global-set-key (kbd "<f19>") 'major-mode-hydra)

(nougat-hydra hydra-help (:color blue)
  ("Describe"
   (("c" describe-function "function")
    ("p" describe-package "package")
    ("m" describe-mode "mode")
    ("v" describe-variable "variable"))
   "Keys"
   (("k" describe-key "key")
    ("K" describe-key-briefly "brief key")
    ("w" where-is "where-is")
    ("b" helm-descbinds "bindings"))
   "Search"
   (("a" helm-apropos "apropos")
    ("d" apropos-documentation "documentation")
    ("s" info-lookup-symbol "symbol info"))
   "Docs"
   (("i" info "info")
    ("n" helm-man-woman "man")
    ("h" helm-dash "dash"))
   "View"
   (("e" view-echo-area-messages "echo area")
    ("l" view-lossage "lossage")
    ("c" describe-coding-system "encoding")
    ("I" describe-input-method "input method")
    ("C" describe-char "char at point"))))

(defun unpop-to-mark-command ()
  "Unpop off mark ring. Does nothing if mark ring is empty."
  (when mark-ring
    (setq mark-ring (cons (copy-marker (mark-marker)) mark-ring))
    (set-marker (mark-marker) (car (last mark-ring)) (current-buffer))
    (when (null (mark t)) (ding))
    (setq mark-ring (nbutlast mark-ring))
    (goto-char (marker-position (car (last mark-ring))))))

(defun push-mark ()
  (interactive)
  (set-mark-command nil)
  (set-mark-command nil))

(nougat-hydra hydra-mark (:color pink)
  ("Mark"
   (("m" push-mark "mark here")
    ("p" (lambda () (interactive) (set-mark-command '(4))) "previous")
    ("n" (lambda () (interactive) (unpop-to-mark-command)) "next")
    ("c" (lambda () (interactive) (setq mark-ring nil)) "clear"))))

(defun projectile-readme ()
    (interactive)
    (let ((file-name (-find (lambda (f) (s-matches? "^readme" f))
                            (projectile-current-project-files))))
      (find-file (concat (projectile-project-root) "/" file-name))))

(use-package helm-projectile
  :config
  (require 'helm-projectile)

  (defun projectile-dwim ()
    (interactive)
    (if (string= "-" (projectile-project-name))
        (helm-projectile-switch-project)
      (hydra-projectile/body)))

  (nougat-hydra hydra-projectile (:color blue)
    ("Open"
     (("f" (helm-projectile-find-file-dwim) "file")
      ("r" (helm-projectile-recentf) "recent")
      ("p" (helm-projectile-switch-project) "project")
      ("d" (helm-projectile-find-dir) "directory")
      ("b" (helm-projectile-switch-to-buffer) "switch")
      ("R" (projectile-readme) "README"))
     "Search"
     (("o" (projectile-multi-occur) "occur")
      ("g" (projectile-ag) "grep"))
     "Cache"
     (("C" projectile-invalidate-cache "clear")
      ("x" (projectile-remove-known-project) "remove project")
      ("X" (projectile-cleanup-known-projects) "cleanup")))))

(nougat-hydra hydra-registers (:color pink)
  ("Point"
   (("r" point-to-register "save point")
    ("j" jump-to-register "jump")
    ("v" view-register "view all"))
   "Text"
   (("c" copy-to-register "copy region")
    ("C" copy-rectangle-to-register "copy rect")
    ("i" insert-register "insert")
    ("p" prepend-to-register "prepend")
    ("a" append-to-register "append"))
   "Macros"
   (("m" kmacro-to-register "store")
    ("e" jump-to-register "execute"))))

(use-package ace-window)
(winner-mode 1)

(nougat-hydra hydra-window (:color red)
  ("Jump"
   (("h" windmove-left "left")
    ("l" windmove-right "right")
    ("k" windmove-up "up")
    ("j" windmove-down "down")
    ("a" ace-select-window "ace"))
   "Split"
   (("q" split-window-right "left")
    ("r" (progn (split-window-right) (call-interactively 'other-window)) "right")
    ("e" split-window-below "up")
    ("w" (progn (split-window-below) (call-interactively 'other-window)) "down"))
   "Do"
   (("d" delete-window "delete")
    ("o" delete-other-windows "delete others")
    ("u" winner-undo "undo")
    ("R" winner-redo "redo")
    ("t" nougat-hydra-toggle-window "toggle"))))

(defun my/toggle-window-split (&optional arg)
    "Switch between 2 windows split horizontally or vertically.
    With ARG, swap them instead."
    (interactive "P")
    (unless (= (count-windows) 2)
      (user-error "Not two windows"))
    ;; Swap two windows
    (if arg
        (let ((this-win-buffer (window-buffer))
              (next-win-buffer (window-buffer (next-window))))
          (set-window-buffer (selected-window) next-win-buffer)
          (set-window-buffer (next-window) this-win-buffer))
      ;; Swap between horizontal and vertical splits
      (let* ((this-win-buffer (window-buffer))
             (next-win-buffer (window-buffer (next-window)))
             (this-win-edges (window-edges (selected-window)))
             (next-win-edges (window-edges (next-window)))
             (this-win-2nd (not (and (<= (car this-win-edges)
                                         (car next-win-edges))
                                     (<= (cadr this-win-edges)
                                         (cadr next-win-edges)))))
             (splitter
              (if (= (car this-win-edges)
                     (car (window-edges (next-window))))
                  'split-window-horizontally
                'split-window-vertically)))
        (delete-other-windows)
        (let ((first-win (selected-window)))
          (funcall splitter)
          (if this-win-2nd (other-window 1))
          (set-window-buffer (selected-window) this-win-buffer)
          (set-window-buffer (next-window) next-win-buffer)
          (select-window first-win)
          (if this-win-2nd (other-window 1))))))

(nougat-hydra hydra-yank-pop (:color red)
  ("Yank/Pop"
   (("y" (yank-pop 1) "previous")
    ("Y" (yank-pop -1) "next")
    ("l" helm-show-kill-ring "list" :color blue))))

(global-set-key
 (kbd "C-y")
 (lambda () (interactive) (yank) (hydra-yank-pop/body)))

(nougat-hydra hydra-zoom (:color red)
  ("Zoom"
   (("i" text-scale-increase "in")
    ("o" text-scale-decrease "out"))))

(nougat-hydra hydra-elisp (:color blue :major-mode emacs-lisp-mode)
  ("Execute"
   (("d" eval-defun "defun")
    ("b" eval-current-buffer "buffer")
    ("r" eval-region "region"))
   "Debug"
   (("D" edebug-defun "defun")
    ("a" edebug-all-defs "all definitions" :color red)
    ("A" edebug-all-forms "all forms" :color red))))

(defun hydra-org-goto-first-sibling () (interactive)
       (org-backward-heading-same-level 99999999))

(defun hydra-org-goto-last-sibling () (interactive)
       (org-forward-heading-same-level 99999999))

(defun hydra-org-parent-level ()
  (interactive)
  (let ((o-point (point)))
    (if (save-excursion
          (beginning-of-line)
          (looking-at org-heading-regexp))
        (progn
          (call-interactively 'outline-up-heading)
          (org-cycle-internal-local))
      (progn
        (call-interactively 'org-previous-visible-heading)
        (org-cycle-internal-local)))
    (when (and (/= o-point (point))
               org-tidy-p)
      (call-interactively 'hydra-org-tidy))))

(defun hydra-org-child-level ()
  (interactive)
  (org-show-entry)
  (org-show-children)
  (when (not (org-goto-first-child))
    (when (save-excursion
            (beginning-of-line)
            (looking-at org-heading-regexp))
      (next-line))))

(require 'helm-org)
(nougat-hydra hydra-org (:color red :major-mode org-mode)
  ("Shift"
   (("K" org-move-subtree-up "up")
    ("J" org-move-subtree-down "down")
    ("h" org-promote-subtree "promote")
    ("l" org-demote-subtree "demote"))
   "Travel"
   (("p" org-backward-heading-same-level "backward")
    ("n" org-forward-heading-same-level "forward")
    ("j" hydra-org-child-level "to child")
    ("k" hydra-org-parent-level "to parent")
    ("a" hydra-org-goto-first-sibling "first sibling")
    ("e" hydra-org-goto-last-sibling "last sibling"))
   "Perform"
   (("b" helm-org-in-buffer-headings "browse")
    ("r" (lambda () (interactive)
           (helm-org-rifle-current-buffer)
           (call-interactively 'org-cycle)
           (call-interactively 'org-cycle)) "rifle")
    ("v" avy-org-goto-heading-timer "avy")
    ("L" org-toggle-link-display "toggle links"))))

;; (use-package spot4e
;;   :straight (spot4e :type git :host github :local-repo "~/src/spot4e")
;;   :config
;;   (setq spot4e-refresh-token "AQDA5zMq9Juoi76685iFALQWp17uWpZVTCPCqTMI2rZFUwX-lmH7Z9idbhPM-SBbTXYWYNyL9pwgEoazggQXZe3kpeavxS4DJYdg5d-5pHKRYpv_jZLx2vUr1pIxZvcz8_k")
;;   (setq spot4e-access-token nil)
;;   (run-with-timer 0 (* 60 59) 'spot4e-refresh))

;; (spot4e-authorize)

;; (pretty-hydra-define hydra-spotify (:color red :hint nil)
;;   ("Player" (("h" (spot4e-player-next) "next")
;;              ("l" (spot4e-player-previous) "previous")
;;              ("j" (spot4e-player-pause) "pause")
;;              ("k" (spot4e-player-play) "play")
;;              ("v" (spot4e-set-volume) "volume"))

;;    "Search" (("t" (spot4e-helm-search-tracks) "tracks")
;;              ("a" (spot4e-helm-search-artists) "artists" :push t)
;;              ("A" (spot4e-helm-search-albums ) "albums")
;;              ("r" (spot4e-helm-search-recent-tracks ) "recent")
;;              ("c" (spot4e-helm-search-categories) "categories")))
;;   (("<f19>" (hera-pop) "nil" :color blue)
;;    ("R" (spot4e-refresh) "nil" :color red)))

;; (hydra-spotify/body)

(use-package demo-it
  :straight (demo-it :type git :host github :repo "howardabrams/demo-it"))

(use-package ox-hugo
  :straight (ox-hugo :type git :host github :repo "kaushalmodi/ox-hugo")
  :after ox
  :config (require 'ox-hugo-auto-export))

(setq ep-notes-file (my/org-file-name "notes.org"))

(defun ep-notes-find-file () (find-file ep-notes-file))

(defun ep-notes-visit (&rest olp) (org-olp-visit ep-notes-file olp))
;; (ep-notes-visit "Workiva" "Runbooks")

(defun ep-notes-select-then-visit (&rest olp) (org-olp-select-then-visit ep-notes-file olp))
;; (ep-notes-select-then-visit "Workiva" "Tasks")

(nougat-hydra hydra-bookmarks (:color blue)
  ("Bookmarks" (("n" (linkmarks-capture) "new")
                ("b" (linkmarks-select) "browse")
                ("e" (find-file my/bookmarks-file-name)))))

(require 'org-olp)

(nougat-hydra hydra-tasks (:color blue)
  ("Todos"
   (("t" (visit-candidate my/notes-file-name '(todo "TODO")) "todo")
    ("d" (visit-candidate my/notes-file-name '(todo "DOING")) "doing")
    ("D" (visit-candidate my/notes-file-name '(todo "DONE")) "done"))))

(nougat-hydra hydra-notes (:color blue)
  ("Notes"
   (("f" (org-olp-find my/notes-file-name) "find")
    ("t" (hera-push 'hydra-tasks/body) "tasks")
    ("p" (org-olp-visit
          my/notes-file-name
          '("Software" "Emacs" "Packages")) "emacs packages"))))

(nougat-hydra hydra-default (:color blue)
  ("Editing"
   (("p" (hera-push 'hydra-projectile/body) "projectile")
    ("R" (hera-push 'hydra-registers/body) "registers")
    ("m" (hera-push 'hydra-mark/body) "mark")
    ("b" (hera-push 'hydra-bookmarks/body) "bookmarks"))
   "UI"
   (("w" (hera-push 'hydra-window/body) "windows")
    ("z" (hera-push 'hydra-zoom/body) "zoom"))
   "Help"
   (("h" (hera-push 'hydra-help/body) "help"))
   "Misc"
   (("n" (hera-push 'hydra-notes/body) "notes")
    ("r" (helm-run-external-command) "run"))))

(enable-theme 'xresources)
