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
  (defvar my/yas-directory (concat my/data-directory "Yas/"))
  (setq linkmarks-file (concat my/org-directory "bookmarks.org")))

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
  (expand-file-name (concat user-emacs-directory "autosaves/")))

(unless (file-exists-p emacs-autosave-directory)
    (make-directory emacs-autosave-directory))

(setq auto-save-file-name-transforms
      `((".*" ,emacs-autosave-directory t)))

;; (setq backup-directory-alist `(("." . ,emacs-autosave-directory)))
(setq make-backup-files nil)
(setq backup-directory-alist nil)

(setq kept-new-versions 10
      kept-old-verisons 0)

(setq delete-old-versions t)

(setq backup-by-copying t)

(setq vc-make-backup-files t)

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

(setq debug-on-error t)

(use-package helpful :straight (helpful :type git :host github :repo "Wilfred/helpful"))

(use-package helpful
    :straight (helpful :type git :host github :repo "Wilfred/helpful")
    :bind (("C-h f" . #'helpful-callable)
           ("C-h v" . #'helpful-variable)
           ("C-h k" . #'helpful-key)))

(use-package deflayer
  :straight (deflayer :type git :host github :repo "dustinlacewell/deflayer.el"))

(use-package polymode)

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

(with-eval-after-load 'org
  (setq org-hide-block-startup nil))

(with-eval-after-load 'org
  (add-hook 'org-mode-hook 'turn-on-auto-fill))

(with-eval-after-load 'org
  (setq org-insert-heading-respect-content nil))

;; (defun my/org-no-line-before-headlines ()
;;   (beginning-of-buffer)
;;   (while (re-search-forward "\n\\{3,\\}\\*" nil t)
;;     (replace-match "\n\n*")))

;; (defun my/org-one-line-after-headlines ()
;;   (beginning-of-buffer)
;;   (while (re-search-forward "^\\*+.*\n\\{2,\\}" nil t)
;;     (outline-previous-heading)
;;     (end-of-line)
;;     (forward-char)
;;     (while (looking-at "^[:space:]*$")
;;       (kill-line))))

;; (defun my/org-trim-headlines ()
;;   (let ((markers nil))
;;     (org-element-map (org-element-parse-buffer) '(headline)
;;       (lambda (paragraph)
;;         (let ((contents-end (org-element-property :contents-end paragraph))
;;               (post-blank (org-element-property :post-blank paragraph))
;;               (marker (make-marker)))
;;           (goto-char contents-end)
;;           (unless (eq 0 post-blank)
;;             (set-marker marker contents-end)
;;             (setq markers (append markers (list (cons marker post-blank))))))))
;;     (--each markers (save-excursion
;;                       (goto-char (car it))
;;                       (kill-line (- (cdr it) 1))))))

;; (defun my/org-element-type-at-point ()
;;   (car (org-element-at-point)))

;; (defun my/org-point-at-headline ()
;;   (let* ((element-type (my/org-element-type-at-point)))
;;     (eq 'headline element-type)))

;; (defun my/org-nearest-fuzzy-anchor ()
;;   (let* ((line-text (lambda () (buffer-substring-no-properties (line-beginning-position)
;;                                                           (line-end-position))))
;;          (still-searching (lambda () (and (not (my/org-point-at-headline))
;;                                      (string-match "^[:space:]*$" (funcall line-text))))))
;;     (while (funcall still-searching)
;;       (previous-line))

;;     (unless (my/org-point-at-headline)
;;       (funcall line-text))))

;; (defun my/org-cleanup ()
;;   (interactive)
;;   (let* ((olp (org-get-outline-path t t))
;;          (fuzzy-anchor (my/org-nearest-fuzzy-anchor)))
;;     (my/org-no-line-before-headlines)
;;     (my/org-one-line-after-headlines)
;;     (org-find-olp olp t)
;;     (when fuzzy-anchor
;;       (search-forward fuzzy-anchor))))

;; (defun my/org-mark-elements (data types marker-prop &rest props)
;;   (let ((markers nil))
;;     (org-element-map data types
;;       (lambda (element)
;;         (let* ((marker (make-marker))
;;                (marker-pos (org-element-property marker-prop element))
;;                (prop-map (make-hash-table)))
;;           (when marker-pos
;;             (set-marker marker marker-pos)
;;             (--each props (map-put! prop-map it (org-element-property it element)))
;;             (setq markers (append markers (list (cons marker prop-map))))))))

;;     markers))

;; (defun my/org-visit-markers (markers)
;;   (--each markers
;;     (goto-char (car it))
;;     (sit-for 1)))

;; (defun my/org-visit-elements (types &optional data)
;;   (setq data (or data (org-element-parse-buffer)))
;;   (my/org-visit-markers (my/org-mark-elements data types :begin)))

;; (defun my/org-trim-headlines ()
;;   (save-excursion
;;     (--each (my/org-mark-elements (org-element-parse-buffer) '(headline) :begin :pre-blank)
;;       (let* ((prop-map (cdr it))
;;              (pre-blank (map-elt prop-map :pre-blank)))
;;         (when (> pre-blank 1)
;;           (goto-char (car it))
;;           (end-of-line)
;;           (forward-char)
;;           (sit-for 1)
;;           (kill-line (max 0 pre-blank)))))))

;; (defun my/org-trim-paragraphs ()
;;   (save-excursion
;;     (--each (my/org-mark-elements (org-element-parse-buffer) '(paragraph section src-block) :contents-end :post-blank)
;;       (let* ((prop-map (cdr it))
;;              (post-blank (map-elt prop-map :post-blank)))
;;         (if (> post-blank 1)
;;             (progn (goto-char (car it))
;;              (sit-for 1)
;;              (kill-line (max 0 (- post-blank 1))))
;;           (when (eq 0 post-blank)
;;             (goto-char (car it))
;;             (end-of-line)
;;             (forward-char)
;;             (open-line 1)))))))

;; (defun my/org-cleanup ()
;;   (interactive)
;;   (my/org-trim-headlines)
;;   (my/org-trim-paragraphs))


;; (with-eval-after-load 'org
;;   (add-hook
;;    'org-mode-hook
;;    (lambda () (add-hook
;;           'before-save-hook
;;           'my/org-cleanup
;;           nil 'make-it-local))))

(setq org-startup-folded 'content)

(setq todo-keywords
      ;; normal workflow
      '((("DOING" "d"
          :icon "🏃"
          :face org-doing-face)

         ("TODO" "t"
          :icon "… "
          :face org-todo-face)

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

(use-package poly-org)



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

(use-package helm-ag)

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

(when window-system
  (defun helm-full-frame-hook ()
  (let ((threshold (* helm-full-frame-threshold (x-display-pixel-height))))
    (setq helm-full-frame (< (frame-height) threshold))))

  (add-hook 'helm-before-initialize-hook 'helm-full-frame-hook))

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

;(use-package elpy)

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

(eval `(use-package nix-mode
   ;; :straight (nix-mode :type git :local-repo ,(my/source-directory "nix-mode"))
                                        ;:straight (nix-mode :type git :host github :repo "NixOS/nix-mode")
   :config
   (add-to-list 'auto-mode-alist '("\\.nix?\\'" . nix-mode))
   (add-hook 'before-save-hook #'nix-mode-format)
   (define-key nix-mode-map (kbd "TAB") 'nix-indent-line)
   (setq nix-indent-function 'nix-indent-line)
   (defalias
     #'nix-indent-expression-start
     #'fixed-nix-indent-expression-start)))

(use-package nix-sandbox)

(use-package yasnippet
  :config
  (setq yas-snippet-dirs '(my/yas-directory))
  (yas-global-mode 1))

(eval `(use-package org-brain
         ;; :straight (helpful :type git :host github :repo "Kungsgeten/org-brain")
         :straight (org-brain :local-repo ,(my/source-directory "org-brain"))
         :config
         (setcdr org-brain-visualize-mode-map nil)
         (setq org-brain-visualize-default-choices 'root
               org-brain-path "/home/ldlework/src/episteme/brain/"
               org-brain-include-file-entries t
               org-brain-scan-for-header-entries nil
               org-brain-file-entries-use-title t
               org-brain-show-full-entry t
               org-brain-show-text t
               org-id-track-globally t
               org-brain-vis-current-title-append-functions '(org-brain-entry-tags-string)
               org-brain-title-max-length 24)))

(defun my/org-brain-visualize-parent ()
  (interactive)
  (when (org-brain-parents (org-brain-entry-at-pt)) (org-brain-visualize-parent (org-brain-entry-at-pt))))

(defun my/org-brain-visualize-child (entry &optional all)
  (interactive (list (org-brain-entry-at-pt)))
  (when (org-brain-children entry)
    (let* ((entries (if all (org-brain-children entry)
                    (org-brain--linked-property-entries
                     entry org-brain-children-property-name)))
         (child (cond
                 ((equal 1 (length entries)) (car-safe entries))
                 ((not entries) (error (concat entry " has no children")))
                 (t (org-brain-choose-entry "Goto child: " entries nil t)))))
      (org-brain-visualize child))))

(defun my/next-button-with-category (category)
  (let ((original-point (point))
        (first-result (text-property-search-forward 'brain-category category t t)))
    (when first-result
          (goto-char (prop-match-beginning first-result)))
    (when (eq original-point (point))
      (beginning-of-buffer)
      (let ((second-result (text-property-search-forward 'brain-category category t t)))
        (when second-result
          (goto-char (prop-match-beginning second-result))))
      (when (eq 0 (point))
        (goto-char original-point))
      )
    ))

(defun my/previous-button-with-category (category)
  (let ((result (text-property-search-backwards 'brain-category category nil t)))))

(defun my/next-brain-child ()
  (interactive)
  (my/next-button-with-category 'child))

(defun my/next-brain-history ()
  (interactive)
  (my/next-button-with-category 'history))

(defun my/avy-brain-jump (category)
  (avy-jump "\\<." :pred (lambda () (and (eq category (get-text-property (point) 'brain-category))
                                    (eq (- (point) 1) (button-start (button-at (point))))))
            :action (lambda (p) (goto-char (+ 1 p)) (push-button))))

(defun my/avy-brain-jump-history ()
  (interactive)
  (my/avy-brain-jump 'history))

(defun my/avy-brain-jump-child ()
  (interactive)
  (my/avy-brain-jump 'child))

(defun my/avy-brain-jump-parent ()
  (interactive)
  (my/avy-brain-jump 'parent))

(defun my/avy-brain-jump-friend ()
  (interactive)
  (my/avy-brain-jump 'friend))

(defun my/avy-brain-jump-sibling ()
  (interactive)
  (my/avy-brain-jump 'sibling))

(eval `(use-package polybrain
         :defer nil
         :straight (polybrain :local-repo ,(my/project-directory "polybrain"))
         :bind (
                :map org-brain-visualize-mode-map
                ("m" . org-brain-visualize-mind-map)
                ("<tab>" . backward-button)
                ("S-<tab>" . forward-button)
                ("DEL" . org-brain-visualize-back)
                ("r" . org-brain-open-resource)
                ("v" . org-brain-visualize)

                ("i" . org-brain-pin)
                ("T" . org-brain-set-title)
                ("t" . org-brain-set-tags)
                ("d" . org-brain-delete-entry)
                ("R" . org-brain-visualize-add-resource)
                ("o" . org-brain-goto-current)
                ("O" . org-brain-goto)

                ("c" . org-brain-add-child)
                ("C" . org-brain-remove-child)

                ("p" . org-brain-add-parent)
                ("P" . org-brain-remove-parent)

                ("f" . org-brain-add-friendship)
                ("F" . org-brain-remove-friendship)

                ("e" . org-brain-annotate-edge)


                ("M-p" . my/avy-brain-jump-parent)
                ("M-c" . my/avy-brain-jump-child)
                ("M-s" . my/avy-brain-jump-sibling)
                ("M-f" . my/avy-brain-jump-friend)
                ("M-h" . my/avy-brain-jump-history)


                :map poly-brain-mode-map
                ("C-x C-s" . polybrain-save)
                ("<M-SPC>" . polybrain-switch))))

;; (require 'polybrain)

(defun episteme-search ()
  (interactive)
  (helm-do-ag (my/project-directory "episteme/brain"))
  (let* ((p (point))
         (f (org-brain-first-headline-position))
         (adjusted-point (max 0 (- p f))))
    (org-brain-visualize (file-name-sans-extension (buffer-name)))
    (with-current-buffer "*org-brain*"
      (let ((minmax (polybrain--get-point-min-max)))
        (goto-char (+ (car minmax) adjusted-point))))))

(use-package pretty-hydra
  :demand t
  :straight (pretty-hydra :type git :host github
                          :repo "jerrypnz/major-mode-hydra.el"
                          :branch "c6554ea"
                          :files ("pretty-hydra.el")))

(use-package major-mode-hydra
  :demand t
  :straight (major-mode-hydra :type git :host github
                              :repo "jerrypnz/major-mode-hydra.el"
                              :branch "c6554ea"
                              :files ("major-mode-hydra.el"))
  :config
  (global-set-key (kbd "C-<f19>") 'major-mode-hydra)
  (global-set-key (kbd "C-<f12>") 'major-mode-hydra))

(use-package hera
  :demand t
  :straight (hera :type git :host github :repo "dustinlacewell/hera"))

(defun nougat--inject-hint (symbol hint)
  (-let* ((name (symbol-name symbol))
          (hint-symbol (intern (format "%s/hint" name)))
          (format-form (eval hint-symbol))
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
      (cl-remf body :major-mode))
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
    (if mode (major-mode-hydra)
      (hera-start 'hydra-default/body))))

(setq kbd-hera-pop "<f12>")
(global-set-key (kbd "<f13>") 'my/hydra-dwim)
(global-set-key (kbd "<f12>") (lambda () (interactive) (hera-start 'hydra-default/body)))

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
      (insert-file-contents (my/org-file-name "bookmarks.org"))
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
      '("t" "Bookmark" entry (file (my/org-file-name "bookmarks.org"))
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

(use-package helm-projectile :demand t
  :config
  (defun projectile-dwim ()
    (interactive)
    (if (string= "-" (projectile-project-name))
        (helm-projectile-switch-project)
      (hydra-projectile/body)))

  (nougat-hydra hydra-projectile (:color blue)
    ("Open"
     (("f" (helm-projectile-find-file-dwim) "file")
      ("p" (helm-projectile-switch-project) "project")
      ("b" (helm-projectile-switch-to-buffer) "buffer")
      ("w" (hydra-treemacs/body) "workspace"))
     "Do"
     (("s" (call-interactively 'helm-ag-project-root) "search")
      ("c" (org-projectile-helm-template-or-project) "capture"))
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

(nougat-hydra hydra-brain (:color red :major-mode org-brain-visualize-mode)
  (
   "View"
   (("m" (polybrain-top-then 'org-brain-visualize-mind-map) "mind-map")
    ("R" (polybrain-top-then 'org-brain-visualize-add-resource) "add resource")
    ("M-SPC" polybrain-switch "switch"))
   "Navigate"
   (("o" (polybrain-top-then 'org-brain-visualize) "open")
    ("DEL" (polybrain-top-then 'org-brain-visualize-back) "back")
    ("M-p" (polybrain-top-then 'my/avy-brain-jump-parent) "parent")
    ("M-c" (polybrain-top-then 'my/avy-brain-jump-child) "child")
    ("M-f" (polybrain-top-then 'my/avy-brain-jump-friend) "friend")
    ("M-s" (polybrain-top-then 'my/avy-brain-jump-sibling) "sibling")
    ("M-h" (polybrain-top-then 'my/avy-brain-jump-history) "history")
    ("r" (polybrain-top-then 'org-brain-open-resource) "open resource"))
   "Relations"
   (("c" (polybrain-top-then 'org-brain-add-child) "add child")
    ("C" (polybrain-top-then 'org-brain-remove-child) "remove child")
    ("p" (polybrain-top-then 'org-brain-add-parent) "add parent")
    ("P" (polybrain-top-then 'org-brain-remove-parent) "remove parent")
    ("f" (polybrain-top-then 'org-brain-add-friendship) "add friend")
    ("F" (polybrain-top-then 'org-brain-remove-friendship) "remove friend"))
   "Manipulate"
   (("e" (polybrain-top-then 'org-brain-goto-current) "edit")
    ("D" (polybrain-top-then 'org-brain-delete-entry) "delete")
    ("t" (polybrain-top-then 'org-brain-set-tags) "tags")
    ("i" (polybrain-top-then 'org-brain-pin) "pin"))
   ))
(nougat-hydra hydra-brain (:color red :major-mode org-brain-visualize-mode)
  (
   "View"
   (("m" (polybrain-top-then 'org-brain-visualize-mind-map) "mind-map")
    ("R" (polybrain-top-then 'org-brain-visualize-add-resource) "add resource")
    ("M-SPC" polybrain-switch "switch"))
   "Navigate"
   (("o" (polybrain-top-then 'org-brain-visualize) "open")
    ("DEL" (polybrain-top-then 'org-brain-visualize-back) "back")
    ("M-p" (polybrain-top-then 'my/avy-brain-jump-parent) "parent")
    ("M-c" (polybrain-top-then 'my/avy-brain-jump-child) "child")
    ("M-f" (polybrain-top-then 'my/avy-brain-jump-friend) "friend")
    ("M-s" (polybrain-top-then 'my/avy-brain-jump-sibling) "sibling")
    ("M-h" (polybrain-top-then 'my/avy-brain-jump-history) "history")
    ("r" (polybrain-top-then 'org-brain-open-resource) "open resource"))
   "Relations"
   (("c" (polybrain-top-then 'org-brain-add-child) "add child")
    ("C" (polybrain-top-then 'org-brain-remove-child) "remove child")
    ("p" (polybrain-top-then 'org-brain-add-parent) "add parent")
    ("P" (polybrain-top-then 'org-brain-remove-parent) "remove parent")
    ("f" (polybrain-top-then 'org-brain-add-friendship) "add friend")
    ("F" (polybrain-top-then 'org-brain-remove-friendship) "remove friend"))
   "Manipulate"
   (("e" (polybrain-top-then 'org-brain-goto-current) "edit")
    ("D" (polybrain-top-then 'org-brain-delete-entry) "delete")
    ("t" (polybrain-top-then 'org-brain-set-tags) "tags")
    ("i" (polybrain-top-then 'org-brain-pin) "pin"))
   ))

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

(use-package treemacs
  :demand t
  :config (progn
          (setq treemacs-width 25)
          (global-set-key (kbd "M-<f12>") 'treemacs)
          (define-key treemacs-mode-map [mouse-1] #'treemacs-single-click-expand-action)
          (setq treemacs-project-follow-cleanup t)
          (setq treemacs-is-never-other-window t)))

(setq treemacs-icon-open-png   (propertize "⊖ " 'face 'treemacs-directory-face)
      treemacs-icon-closed-png (propertize "⊕ " 'face 'treemacs-directory-face))

(use-package treemacs-projectile)
(use-package treemacs-magit)

(nougat-hydra hydra-treemacs (:color red)
  ("Workspace"
   (("o" treemacs-switch-workspace "open")
    ("n" treemacs-create-workspace "new")
    ("k" treemacs-delete-workspace "kill")
    ("r" treemacs-rename-workspace "rename"))))

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
  (setq rmh-elfeed-org-files (list (my/org-file-name "notes.org"))))

(use-package demo-it
  :straight (demo-it :type git :host github :repo "howardabrams/demo-it"))

(use-package gist
  :straight (gist :type git :host github :repo "defunkt/gist.el"))


(nougat-hydra hydra-gist (:color blue)
  ("Gist" (("p" (gist-region-or-buffer) "public")
           ("P" (gist-region-or-buffer-private) "private")
           ("b" (browse-url "https://gist.github.com/dustinlacewell") "browse"))))

(use-package poker
  :straight (poker :type git :host github :repo "mlang/poker.el"))

(use-package decide
  :straight (decide :type git :host github :repo "lifelike/decide-mode"))

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
  ("Open"
   (("a" (org-agenda nil "a") "agenda")
    ("p" (hera-push 'hydra-projectile/body) "projectile")
    ("c" (org-capture) "capture")
    ("b" (hera-push 'hydra-bookmarks/body) "bookmarks"))
   "Emacs"
   (("h" (hera-push 'hydra-help/body) "help")
    ("m" (hera-push 'hydra-mark/body) "mark")
    ("w" (hera-push 'hydra-window/body) "windows")
    ("z" (hera-push 'hydra-zoom/body) "zoom")
    ("r" (hera-push 'hydra-registers/body) "registers"))
   "Misc"
   (("n" (hera-push 'hydra-notes/body) "notes")
    ("g" (hera-push 'hydra-gist/body) "gist")
    ("B" org-brain-visualize "brain")
    ("?" episteme-search "search brain")
    ("l" (progn (setq this-command 'sutysisku-search-helm)
                (call-interactively 'sutysisku-search-helm)) "lojban"))))

;; (defhydra hydra-default (:color blue :hint nil)
;;   "

;;             Entrypoint Hydra

;; "
;;   ("a" (org-agenda nil "a") "agenda" :column "Open")
;;   ("p" (hera-push 'hydra-projectile/body) "projectile")
;;   ("c" (org-capture) "capture")
;;   ("b" (hera-push 'hydra-bookmarks/body) "bookmarks")
;;   ("h" (hera-push 'hydra-help/body) "help" :column "Emacs")
;;   ("m" (hera-push 'hydra-mark/body) "mark")
;;   ("w" (hera-push 'hydra-window/body) "windows")
;;   ("z" (hera-push 'hydra-zoom/body) "zoom")
;;   ("R" (hera-push 'hydra-registers/body) "registers")
;;   ("n" (hera-push 'hydra-notes/body) "notes" :column "Misc")
;;   ("s" (call-interactively 'helm-imenu) "semantic")
;;   ("g" (hera-push 'hydra-gist/body) "gist")
;;   ("b" (call-interactively 'org-brain-visualize) "brain")
;;   ("l" (progn (setq this-command 'sutysisku-search-helm)
;;               (call-interactively 'sutysisku-search-helm)) "lojban"))

(when (string-equal system-type "gnu/linux")

(setq exec-path-from-shell-check-startup-files nil)

(load-file "/home/ldlework/.emacs.d/theme.el")
(enable-theme 'xresources)

(defun theme-callback (event)
  (load-file "~/.config/wpg/formats/theme.el")
  (set-eyeliner-colors)
  (eyeliner/install)
  (enable-theme 'xresources))

(require 'filenotify)
(setq theme-watch-handle
      (file-notify-add-watch
       "/home/ldlework/.config/wpg/formats/theme.el" '(change) 'theme-callback))

(setq powerline-height 32)
(set-face-attribute 'default nil :family "Source Code Pro" :weight 'light)

(use-package unicode-fonts
  :config
  (unicode-fonts-setup)
  (set-face-attribute 'default nil :font "Source Code Pro")
  ;(set-fontset-font "fontset-default" 'unicode "Consolas" nil)
  (set-fontset-font "fontset-default" 'unicode "DejaVu Sans Mono" nil)
  (set-fontset-font "fontset-default" 'unicode "Symbola" nil)
 )

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

(eval `(use-package eyeliner
   ;; :straight (eyeliner :type git :host github :repo "dustinlacewell/eyeliner")
   :demand t
   :straight (eyeliner :local-repo ,(my/project-directory "eyeliner"))
   :config
   (spaceline-helm-mode 1)
   (set-eyeliner-colors)
   (eyeliner/install)))

(setq ispell-program-name (concat my/home-directory ".nix-profile/bin/aspell"))

(use-package backup-each-save
  :config (add-hook 'after-save-hook 'backup-each-save))

(setq x-gtk-use-system-tooltips nil)

(when window-system
  (use-package org-beautify-theme
    :after (org)
    :config
    (setq org-fontify-whole-heading-line t)
    (setq org-fontify-quote-and-verse-blocks t)
    (setq org-hide-emphasis-markers t)))

(use-package jedi
  :init
  (progn
    (add-hook 'python-mode-hook 'jedi:setup)
    (setq jedi:complete-on-dot t)))

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
  (add-hook 'typescript-mode-hook #'setup-tide-mode)
  (add-to-list 'auto-mode-alist '("\\.tsx\\'" . web-mode))
  (add-hook 'web-mode-hook
            (lambda ()
              (when (string-equal "tsx" (file-name-extension buffer-file-name))
                (setup-tide-mode))))
  (flycheck-add-mode 'typescript-tslint 'web-mode))

(with-eval-after-load 'fsharp-mode
  (add-to-list 'exec-path "/nix/var/nix/profiles/default/bin")
  (add-to-list 'exec-path (expand-file-name "~/.nix-profile/bin"))
  (add-to-list 'auto-mode-alist '("\\.fs[iylx]?$" . fsharp-mode)))

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

(enable-theme 'xresources)

)

(when (string-equal system-type "windows-nt")

(use-package dracula-theme)

)
