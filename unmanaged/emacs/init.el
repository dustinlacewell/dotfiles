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
(use-package f :demand t)          ;; files
(use-package dash :demand t)       ;; lists
(use-package ht :demand t)         ;; hash-tables
(use-package s :demand t)          ;; strings
(use-package a :demand t)          ;; association lists
(use-package anaphora :demand t)   ;; anaphora
;; (eval `(use-package ecl :demand t :straight (ecl :type git :local-repo ,(my/project-directory "ecl"))))

(when (string-equal system-type "gnu/linux")
  (defvar my/home-directory (expand-file-name "~/"))
  (defvar my/data-directory (concat my/home-directory ".emacs.d/"))
  (defvar my/projects-directory (concat my/home-directory "src/"))
  (defvar my/sources-directory (concat my/home-directory "ext/"))
  (defvar my/org-directory (concat my/home-directory "org/"))
  (defvar my/yas-directory (concat my/data-directory "yas/")))

(when (string-equal system-type "windows-nt")
  (defvar my/home-directory (expand-file-name "b:/"))
  (defvar my/data-directory (concat my/home-directory "Emacs/"))
  (defvar my/projects-directory (concat my/home-directory "Projects/"))
  (defvar my/sources-directory (concat my/home-directory "Sources/"))
  (defvar my/org-directory (concat my/home-directory "Syncthing/Org/"))
  (defvar my/yas-directory (concat my/data-directory "Yas/")))

(defun my/org-file-name (file-name)
  "Create file-name relative to my/org-directory"
  (concat my/org-directory file-name))

(defvar my/notes-file-name
  (my/org-file-name "notes.org")
  "Main notes file-name")

(defvar my/bookmarks-file-name
  (my/org-file-name "bookmarks.org")
  "Main bookmarks file-name")

(setq-default my/template-directory (concat my/org-directory "templates/"))

(defun my/template-file-name (file-name)
  "Create file-name relative to my/template-directory"
  (concat my/template-directory file-name))

(defun my/project-directory (name)
  (concat my/projects-directory name))

(defun my/source-directory (name)
  (concat my/sources-directory name))

(setq browse-url-browser-function 'browse-url-chrome)
(setq browse-url-chrome-program "qutebrowser")

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

(fset 'yes-or-no-p 'y-or-n-p)

;; (defun set-eyeliner-colors ()
;;   (setq buffer-name-color "#ff0000")
;;   (setq buffer-name-modified-color "#ff0000")
;;   (setq eyeliner/warm-color (theme-color 'red))
;;   (setq eyeliner/cool-color (theme-color 'cyan))
;;   (setq eyeliner/plain-color (theme-color 'foreground))
;;   (custom-set-faces
;;    `(powerline-active0
;;      ((t (:background ,(theme-color 'foreground)))))
;;    `(powerline-inactive0
;;      ((t (:background ,(theme-color 'foreground)))))
;;    `(powerline-active1
;;      ((t (:background ,(theme-color 'foreground)
;;                       :foreground ,(theme-color 'background)))))
;;    `(powerline-inactive1
;;      ((t (:background ,(theme-color 'foreground)
;;                       :foreground ,(theme-color 'background)))))
;;    `(powerline-active2
;;      ((t (:background ,(theme-color 'background)))))
;;    `(powerline-inactive2
;;      ((t (:background ,(theme-color 'background)))))))

;; (eval `(use-package eyeliner
;;    ;; :straight (eyeliner :type git :host github :repo "dustinlacewell/eyeliner")
;;    :demand t
;;    :straight (eyeliner :local-repo ,(my/project-directory "eyeliner"))
;;    :config
;;    (spaceline-helm-mode 1)
;;    (set-eyeliner-colors)
;;    (eyeliner/install)))

(setq debug-on-error t)

(use-package helpful :straight (helpful :type git :host github :repo "Wilfred/helpful"))

(use-package helpful
    :straight (helpful :type git :host github :repo "Wilfred/helpful")
    :bind (("C-h f" . #'helpful-callable)
           ("C-h v" . #'helpful-variable)
           ("C-h k" . #'helpful-key)))

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
  :demand t
  :mode ("\\.org\\'" . org-mode)
  :config
  ;; these depend on the 'straight.el fixes' above
  (defalias #'org-git-version #'fix-org-git-version)
  (defalias #'org-release #'fix-org-release)
  (require 'org-habit)
  (require 'org-capture)
  (require 'org-tempo))

(progn
  (setq org-confirm-babel-evaluate nil)
  (setq org-confirm-elisp-link-function nil)
  (setq org-confirm-shell-link-function nil))

(with-eval-after-load 'org
  (add-hook 'org-mode-hook #'org-indent-mode))

(use-package org-bullets
  :after (org)
  :config
  (add-hook 'org-mode-hook 'org-bullets-mode))

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
                 (todo-prettify-symbols-alist todo-keywords)))))

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

(setq todo-keywords
      ;; normal workflow
      '((("TODO" "t"
          :icon "… "
          :face org-todo-face)

         ("DOING" "d"
          :icon "🏃"
          :face org-doing-face)

         ("DONE" "D"
          :icon "✓ "
          :face org-done-face
          :done-state t))

        ;; auxillary states
        (("SOON" "s"
          :icon "❗ "
          :face org-soon-face)

         ("SOMEDAY" "S"
          :icon "🛌"
          :face org-doing-face))))


;; parsing

(defun todo-make-state-model (name key props)
  (append (list :name name :key key) props))

(defun todo-parse-state-data (state-data)
  (-let* (((name second &rest) state-data)
          ((key props) (if (stringp second)
                           (list second (cddr state-data))
                         (list nil (cdr state-data)))))
    (todo-make-state-model name key props)))

(defun todo-make-sequence-model (states)
  (mapcar 'todo-parse-state-data states))

(defun todo-parse-sequences-data (sequences-data)
  (mapcar 'todo-make-sequence-model sequences-data))


;; org-todo-keywords

(defun todo-keyword-name (name key)
  (if key (format "%s(%s)" name key) name))

(defun todo-keyword-name-for-state (state)
  (todo-keyword-name (plist-get state :name)
                     (plist-get state :key)))

(defun todo-is-done-state (state)
  (equal t (plist-get state :done-state)))

(defun todo-is-not-done-state (state)
  (equal nil (plist-get state :done-state)))

(defun todo-org-sequence (states)
  (let ((active (seq-filter 'todo-is-not-done-state states))
        (inactive (seq-filter 'todo-is-done-state states)))
    (append '(sequence)
            (mapcar 'todo-keyword-name-for-state active)
            '("|")
            (mapcar 'todo-keyword-name-for-state inactive))))

(defun todo-org-todo-keywords (sequences)
  (mapcar 'todo-org-sequence (todo-parse-sequences-data sequences)))
;; (todo-org-todo-keywords todo-keywords)


(with-eval-after-load 'org
  (setq org-todo-keywords (todo-org-todo-keywords todo-keywords)))


(defun todo-org-todo-keyword-faces (sequences)
  (cl-loop for sequence in (todo-parse-sequences-data sequences)
           append (cl-loop for state in sequence
                           for name = (plist-get state :name)
                           for face = (plist-get state :face)
                           collect (cons name face))))
;; (todo-org-todo-keyword-faces todo-keywords)

(with-eval-after-load 'org
  (setq org-todo-keyword-faces (todo-org-todo-keyword-faces todo-keywords)))

(defun todo-prettify-symbols-alist (sequences)
  (cl-loop for sequence in (todo-parse-sequences-data sequences)
           append (cl-loop for state in sequence
                           for name = (plist-get state :name)
                           for icon = (plist-get state :icon)
                           collect (cons name icon))))
;; (todo-prettify-symbols-alist todo-keywords)

(defun todo-finalize-agenda-for-state (state)
  (-let (((&plist :name :icon :face) state))
    (beginning-of-buffer)
    (while (search-forward name nil 1)
      (let* ((line-props (text-properties-at (point)))
             (line-props (ecl-plist-remove line-props 'face)))
        (call-interactively 'set-mark-command)
        (search-backward name)
        (call-interactively 'kill-region)
        (let ((symbol-pos (point)))
          (insert icon)
          (beginning-of-line)
          (let ((start (point))
                (end (progn (end-of-line) (point))))
            (add-text-properties start end line-props)
            (add-face-text-property symbol-pos (+ 1 symbol-pos) face))))))
  (beginning-of-buffer)
  (replace-regexp "[[:space:]]+[=]+" ""))

(defun todo-finalize-agenda ()
  (--each (todo-parse-sequences-data todo-keywords)
    (-each it 'todo-finalize-agenda-for-state)))

(add-hook 'org-agenda-finalize-hook 'todo-finalize-agenda)



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
  (setq org-confirm-babel-evaluate nil)
  (setq org-confirm-shell-link-function nil)
  (setq org-confirm-elisp-link-function nil))

(use-package helm-org)

(use-package org-projectile
  :config
  (progn
    (org-projectile-per-project)
    (setq org-projectile-per-project-filepath "notes.org")
    (add-to-list 'org-capture-templates
                 (org-projectile-project-todo-entry
                  :capture-character "l"
                  :capture-heading "Linked Project TODO"))
    (add-to-list 'org-capture-templates
                 (org-projectile-project-todo-entry
                  :capture-character "p"))
    (setq org-confirm-elisp-link-function nil)))

(use-package org-projectile-helm
  :after org-projectile
  :bind (("C-c n p" . org-projectile-helm-template-or-project)))

(with-eval-after-load 'org
  (setq org-default-notes-file (my/org-file-name "inbox.org")))

(with-eval-after-load 'org
  (global-set-key (kbd "C-c c") 'org-capture))

(with-eval-after-load 'org
  (add-to-list 'org-capture-after-finalize-hook 'org-capture-goto-last-stored))



(setq org-directory my/org-directory
      org-agenda-todo-keyword-format ""
      org-agenda-prefix-format '((todo . "  %(org-get-todo-state)"))
      org-agenda-files (-filter 'f-exists? (append
                                            (f-glob (my/org-file-name "*.org"))
                                            (f-glob (my/project-directory "*/*.org"))
                                            (f-glob (my/source-directory "*/*.org")))))

(eval `(use-package org-super-agenda
         ;; :straight (org-super-agenda
         ;;            :local-repo ,(my/source-directory "org-super-agenda"))
         :config (org-super-agenda-mode)))

(defun org-agenda-transformer (it)
  (-let* (((blank todo rest) (s-split-up-to
                              "[[:blank:]]+"
                              (substring-no-properties it) 2))
          (project-name (->> it
                             (get-text-property 0 'org-marker)
                             (marker-buffer)
                             (buffer-file-name)
                             (f-parent)
                             (f-base)))
          it)
    (format "  %s %s / %s" todo project-name rest)))

(setq org-agenda-custom-commands
      (list
       (quote
        ("a" "agenda view"
         ((agenda "" ((org-agenda-span 'day)
                      (org-super-agenda-groups
                       '((:name "Today"
                                :time-grid t
                                :date today
                                :todo "TODAY"
                                :scheduled today
                                :order 1)))))
          (alltodo "" ((org-agenda-overriding-header "")
                       (org-super-agenda-groups
                        '((:name "Active"
                                 :todo "DOING"
                                 :order 1
                                 :transformer (org-agenda-transformer it))
                          (:name "Important"
                                 :tag "Important"
                                 :priority "A"
                                 :order 6)
                          (:name "Due Today"
                                 :deadline today
                                 :order 2)
                          (:name "Overdue"
                                 :deadline past
                                 :order 7)
                          (:name "Assignments"
                                 :tag "Assignment"
                                 :order 10)
                          (:name "Issues"
                                 :tag "Issue"
                                 :order 12)
                          (:name "Done"
                                 :todo "DONE")
                          (:discard (:anything t))))))

          (alltodo "" ((org-agenda-overriding-header "")
                       (org-super-agenda-groups
                        '((:auto-group-map
                           (lambda (item)
                             (-when-let* ((marker (or (get-text-property 0 'org-marker item)
                                                      (get-text-property 0 'org-hd-marker item)))
                                          (file-path (->> marker marker-buffer buffer-file-name))
                                          (parent (f-dirname file-path))
                                          (type (f-dirname parent)))
                               (when (equal "src" (f-filename type))
                                 (f-filename parent)))))
                          (:discard (:anything t))))))
          (alltodo "" ((org-agenda-overriding-header "")
                       (org-super-agenda-groups
                        '((:auto-group-map
                           (lambda (item)
                             (if (-contains? (get-text-property 0 'tags item) "mine")
                                 (-when-let* ((marker (or (get-text-property 0 'org-marker item)
                                                          (get-text-property 0 'org-hd-marker item)))
                                              (file-path (->> marker marker-buffer buffer-file-name))
                                              (parent (f-dirname file-path))
                                              (type (f-dirname parent)))
                                   ;; TODO this wont work on windows, use variables
                                   (when (equal "ext" (f-filename type))
                                     (f-filename parent))))))
                          (:discard (:anything t)))))))))))

(eval `(use-package linkmarks
         :straight (linkmarks :type git :host github :repo "dustinlacewell/linkmarks")
         ;; :straight (linkmarks :type git :local-repo ,(my/project-directory "linkmarks/") :files ("linkmarks.el"))
         ))

(use-package outshine
  :init (defvar outline-minor-mode-prefix "\M-#")
  :config (setq outshine-use-speed-commands t)
  :hook ((emacs-lisp-mode . outshine-mode) (nix-mode . outshine-mode)))

(eval `(use-package org-ql
         :demand t
         :straight (org-ql :type git :host github :repo "dustinlacewell/org-ql")
         ;; :straight (org-ql :type git :local-repo ,(my/source-directory "org-ql"))
         ))

(eval `(use-package org-olp
         :demand t
         :straight (org-olp :type git :host github :repo "dustinlacewell/org-olp")
         ;; :straight (org-olp :type git :local-repo ,(my/project-directory "org-olp"))
         ))

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

;; (get-candidates (my/org-file-name "notes.org") '(todo "TODO"))

(defun select-candidate (filename query)
  (let* ((candidates (get-candidates filename query)))
    (car (helm :sources
               (helm-build-sync-source "active-todos"
                 :candidates candidates
                 :fuzzy-match t)))))

;; (select-candidate (my/org-file-name "notes.org") '(todo "TODO"))

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
 (file-name-as-directory my/projects-directory))
(projectile-discover-projects-in-directory
 (file-name-as-directory my/sources-directory))

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

(use-package magit
  :demand t
  :config
  (global-set-key (kbd "C-x g") 'magit-status))

;; (use-package closql)
;; (use-package forge
;;   :demand t
;;   :straight (forge :type git :host github :repo "magit/forge" :files ("lisp/*.el")))

(use-package flycheck)

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

(use-package typescript-mode)

(use-package web-mode
  :demand t
  :config
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
  :demand t
  :config
  (add-to-list 'auto-mode-alist '("\\.yml\\'" . yaml-mode)))

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

;; (eval `(use-package sutysisku
;;    :demand t
;;    :straight (sutysisku :local-repo ,(my/project-directory "sutysisku.el/"))))

(use-package rec-mode
  :straight (rec-mode :type git :repo "https://git.savannah.gnu.org/git/recutils.git" :files ("etc/rec-mode.el")))

(defun rec-books-save-hook ()
  (message (buffer-name)))

(use-package dockerfile-mode
  :demand t
  :config
  (add-to-list 'auto-mode-alist '("Dockerfile\\'" . dockerfile-mode)))

(defun nix-mode-make-regexp (parts)
  (declare (indent defun))
  (string-join parts "\\|"))
