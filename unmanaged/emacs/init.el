;; -*- lexical-binding: t -*-

(let ((bootstrap-file (concat user-emacs-directory "straight/repos/straight.el/bootstrap.el"))
      (bootstrap-version 5))
  (unless (file-exists-p bootstrap-file)
    (with-current-buffer
        (url-retrieve-synchronously
         "https://raw.githubusercontent.com/raxod502/straight.el/develop/install.el"
         'silent 'inhibit-cookies)
      (goto-char (point-max))
      (eval-print-last-sexp)))
  (load bootstrap-file nil 'nomessage)
  (setq straight-vc-git-default-clone-depth 1))

(setq straight-use-package-by-default t)
(straight-use-package 'use-package)
(use-package git) ;; ensure we can install from git sources

(require 'cl-lib)
(require 'seq)
(use-package f :demand t)          ;; files
(use-package dash :demand t)       ;; lists
(use-package ht :demand t)         ;; hash-tables
(use-package s :demand t)          ;; strings
(use-package a :demand t)          ;; association lists
(use-package anaphora :demand t)   ;; anaphora

(defun my/get-org-file (file-name)
  (concat my/org-directory file-name))

(defun my/get-project-directory (name)
  (concat my/projects-directory name))

(defun my/get-source-directory (name)
  (concat my/sources-directory name))

(when (string-equal system-type "gnu/linux")
  (defvar my/home-directory (expand-file-name "~/"))
  (defvar my/data-directory (concat my/home-directory ".emacs.d/"))
  (defvar my/projects-directory (concat my/home-directory "src/"))
  (defvar my/sources-directory (concat my/home-directory "ext/"))
  (defvar my/org-directory (concat my/home-directory "org/"))
  (defvar my/yas-directory (concat my/data-directory "yasnippet/")))

(when (string-equal system-type "windows-nt")
  (defvar my/home-directory (expand-file-name "b:/"))
  (defvar my/data-directory (concat my/home-directory "Emacs/"))
  (defvar my/projects-directory (concat my/home-directory "Projects/"))
  (defvar my/sources-directory (concat my/home-directory "Sources/"))
  (defvar my/org-directory (concat my/home-directory "Syncthing/Org/"))
  (defvar my/yas-directory (concat my/data-directory "Yas/"))
  (setq linkmarks-file (concat my/org-directory "bookmarks.org")))

(defvar my/notes-file-name (my/get-org-file "notes.org") "Main notes file-name")
(defvar my/bookmarks-file-name (my/get-org-file "bookmarks.org") "Main bookmarks file-name")
(defvar my/autosaves-directory (concat my/data-directory "autosaves/") "Main bookmarks file-name")
(defvar my/backups-directory (concat my/data-directory "backups/") "Main bookmarks file-name")

(setq browse-url-browser-function 'browse-url-chrome)
(setq browse-url-chrome-program "google-chrome-stable")

(setq my/default-zoom-level 4)

(defmacro :function (&rest body)
  (if (->> body length (< 1))
      `(lambda () ,@body)
    (pcase (car body)
      ;; command symbol
      ((and v (pred commandp))
       `(lambda () (call-interactively (quote ,v))))
      ;; function symbol
      ((and v (pred symbolp))
       `(lambda () (,v)))
      ;; quoted command symbol
      ((and v (pred consp) (guard (eq 'quote (car v))) (pred commandp (cadr v)))
       `(lambda () (call-interactively ,v)))
      ;; quoted function symbol
      ((and v (pred consp) (guard (eq 'quote (car v))))
       `(lambda () (,(cadr v))))
      ;; body forms
      (_ `(lambda () ,@body) ))))

(defmacro :command (&rest body)
  (if (->> body length (< 1))
      `(lambda () (interactive) ,@body)
    (pcase (car body)
      ;; command symbol
      ((and v (pred commandp))
       `(lambda () (interactive) (call-interactively (quote ,v))))
      ;; function symbol
      ((and v (pred symbolp))
       `(lambda () (interactive) (,v)))
      ;; quoted command symbol
      ((and v (pred consp) (guard (eq 'quote (car v))) (pred commandp (cadr v)))
       `(lambda () (interactive) (call-interactively ,v)))
      ;; quoted function symbol
      ((and v (pred consp) (guard (eq 'quote (car v))))
       `(lambda () (interactive) (,(cadr v))))
      ;; body forms
      (_ `(lambda () (interactive) ,@body) ))))

(defmacro :after (package &rest body)
  "A simple wrapper around `with-eval-after-load'."
  (declare (indent defun))
  `(with-eval-after-load ',package ,@body))

(defmacro :hook (hook-name &rest body)
  "A simple wrapper around `add-hook'"
  (declare (indent defun))
  (let* ((hook-name (format "%s-hook" (symbol-name hook-name)))
         (hook-sym (intern hook-name))
         (first (car body))
         (local (eq :local first))
         (body (if local (cdr body) body))
         (first (car body))
         (body (if (consp first)
                   (if (eq (car first) 'quote)
                       first
                     `(lambda () ,@body))
                 `',first)))
    `(add-hook ',hook-sym ,body nil ,local)))

(defmacro :push (sym &rest body)
  (declare (indent defun))
  (if (consp body)
      `(setq ,sym (-snoc ,sym ,@body))
    `(add-to-list ,sym ,body)))

(defmacro :bind (key &rest body)
  (declare (indent defun))
  (pcase key
    ;; kbd string resolving symbol
    ((and k (pred symbolp) (pred boundp) (guard (stringp (eval key))))
     `(global-set-key (kbd ,(eval key)) ,(eval `(:command ,@body))))
    ;; partial mode symbol
    ((pred symbolp)
     (let ((mode (intern (format "%s-map" key)))
           (key (eval (car body)))
           (body (eval `(:command ,@(cdr body)))))
       `(define-key ,mode (kbd ,key) ,body)))
    ;; global binding
    (_ `(global-set-key (kbd ,key) ,(eval `(:command ,@body))))))

(:bind "<f12>" (hera-start 'hydra-default/body))

(:bind "<f13>" my/hydra-dwim)

(:bind "C-c c" org-capture)

(:bind "C-x g" magit-status)

(:bind "M-<f12>" treemacs-dwim)
(:bind "S-M-<f12>" (delete-window (treemacs-get-local-window)))

(:after treemacs
  (:bind treemacs-mode "f" treemacs-toggle-autopeek)
  (:bind treemacs-mode "C-p"
    (call-interactively 'treemacs-previous-line)
    (when treemacs-autopeek-mode
      (run-at-time "0.0 sec" nil 'call-interactively 'treemacs-peek)))
  (:bind treemacs-mode "C-n"
    (call-interactively 'treemacs-next-line)
    (when treemacs-autopeek-mode
      (run-at-time "0.0 sec" nil 'call-interactively 'treemacs-peek))))

(:bind "M-p" backward-paragraph)
(:bind "M-n" forward-paragraph)

(:bind "C-c h" toggle-context-help)

(set-face-foreground 'vertical-border "gray")

(set-face-attribute 'fringe nil :background nil)

(column-number-mode 1)

(use-package doom-modeline
  :ensure t
  :config
  (doom-modeline-def-modeline
   'my-modeline

   '(bar workspace-name window-number modals matches buffer-info remote-host selection-info)
   '(objed-state misc-info buffer-position major-mode process vcs checker))

  (doom-modeline-mode 1)
  (setq doom-modeline-height 35)
  (setq doom-modeline-bar-width 5)
  :init
  (defun setup-custom-doom-modeline ()
    (doom-modeline-set-modeline 'my-modeline 'default))
  (:hook doom-modeline-mode 'setup-custom-doom-modeline))

(setq auto-save-default t)

(setq auto-save-timeout 20
      auto-save-interval 20)

(unless (file-exists-p my/autosaves-directory)
    (make-directory my/autosaves-directory))

(setq auto-save-file-name-transforms
      `((".*" ,my/autosaves-directory t)))

(use-package backup-each-save
  :config (:hook after-save backup-each-save))

(setq kept-new-versions 10)

(setq delete-old-versions t)

(setq backup-by-copying t)

(setq vc-make-backup-files t)

(unless (file-exists-p my/backups-directory)
  (make-directory my/backups-directory))

(setq backup-directory-alist
      `((".*" . ,my/backups-directory)))

(setq make-backup-files t)

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
  :config
  (global-visual-fill-column-mode))

(setq-default fill-column 79)

(:hook text-mode 'turn-on-auto-fill)

(setq tramp-default-method "ssh")

(use-package whitespace
  :custom
  (whitespace-style
   '(face tabs newline trailing tab-mark space-before-tab space-after-tab))
  :config
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
  (:hook prog-mode 'rainbow-delimiters-mode))

(require 'paren)
(show-paren-mode 1)
(setq show-paren-delay 0)
(:after xresources
  (set-face-foreground 'show-paren-match (theme-color 'green))
  (set-face-foreground 'show-paren-mismatch "#f00")
  (set-face-attribute 'show-paren-match nil :weight 'extra-bold)
  (set-face-attribute 'show-paren-mismatch nil :weight 'extra-bold))

(use-package which-key
  :custom
  ;; sort single chars alphabetically P p Q q
  (which-key-sort-order 'which-key-key-order-alpha)
  (which-key-idle-delay 0.4)
  :config
  (which-key-mode))

(use-package company
  :config
  (global-company-mode))

(fset 'yes-or-no-p 'y-or-n-p)

(use-package zoom-frm
  :straight (zoom-frm :type git
                      :host github
                      :repo "emacsmirror/emacswiki.org"
                      :files ("zoom-frm.el"))
  :config
  (dotimes (i my/default-zoom-level) (zoom-frm-in)))

(use-package persistent-soft)

(setq print-level 100
      print-length 9999
      eval-expression-print-level 100
      eval-expression-print-length 9999)

(setq debug-on-error t)

(use-package direnv
 :config
 (direnv-mode))

(use-package helpful
    :straight (helpful :type git :host github :repo "Wilfred/helpful")
    :bind (("C-h s" . #'helpful-symbol)
           ("C-h c" . #'helpful-command)
           ("C-h f" . #'helpful-function)
           ("C-h v" . #'helpful-variable)
           ("C-h k" . #'helpful-key)
           ("C-h m" . #'helpful-mode)
           ("C-h C-h" . #'helpful-at-point)))

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

(use-package projectile
  :config
  (setq projectile-enable-caching t)
  (projectile-mode t))

(setq projectile-project-root-files-bottom-up
      '(".git" ".hg" "README.md" "README.org" "README")
      projectile-project-search-path my/projects-directory
      projectile-sort-order 'access-time)
(projectile-discover-projects-in-directory my/projects-directory)
(projectile-discover-projects-in-directory my/sources-directory)

(use-package helm
  :config
  (helm-mode 1)
  (require 'helm-config)
  (:bind "M-x" helm-M-x)
  (:bind "C-x C-f" helm-find-files)
  (:bind "C-x b" helm-mini)
  (:bind "C-c y" helm-show-kill-ring)
  (:bind "C-x C-r" helm-recentf))

(use-package ace-jump-helm-line
  :config
  (:bind helm "C-;" ace-jump-helm-line))

(use-package helm-ag)

(use-package helm-descbinds
  :commands helm-descbinds
  :config
  (:bind "C-h b" helm-descbinds))

(use-package helm-flyspell
  :commands helm-flyspell-correct
  :config
  (:bind " M-SPC" helm-flyspell-correct)
  (:hook org-mode flyspell-mode)
  (:hook text-mode flyspell-mode)
  (:hook fundamental-mode flyspell-mode))

(use-package helm-projectile
    :config
    (projectile-cleanup-known-projects)
    (setq projectile-completion-system 'helm))

(defun projectile-readme ()
    (interactive)
    (let ((file-name (-find (lambda (f) (s-matches? "^readme" f))
                            (projectile-current-project-files))))
      (find-file (concat (projectile-project-root) "/" file-name))))

(defun hydra-projectile-dwim ()
    (interactive)
    (if (string= "-" (projectile-project-name))
        (helm-projectile)
      (hydra-projectile/body)))

(defvar helm-full-frame-threshold 0.75)

(when window-system
  (defun helm-full-frame-hook ()
  (let ((threshold (* helm-full-frame-threshold (x-display-pixel-height))))
    (setq helm-full-frame (< (frame-height) threshold))))

  (:hook helm-before-initialize 'helm-full-frame-hook))

(use-package treemacs
  :config
  (setq treemacs-width 25
        treemacs-follow-mode -1
        treemacs-tag-follow-mode -1
        treemacs-is-never-other-window t
        treemacs-follow-after-init t
        treemacs-icon-open-png   (propertize "⊖ " 'face 'treemacs-directory-face)
        treemacs-icon-closed-png (propertize "⊕ " 'face 'treemacs-directory-face))
  (define-key treemacs-mode-map [mouse-1]
    #'treemacs-single-click-expand-action))

(use-package treemacs-projectile)
(use-package treemacs-magit)

(setq treemacs-autopeek-mode nil)

(defun treemacs-toggle-autopeek ()
  (interactive)
  (if treemacs-autopeek-mode
      (progn
        (setq treemacs-autopeek-mode nil)
        (message "Treemacs autopeek: OFF"))
    (setq treemacs-autopeek-mode t)
    (message "Treemacs autopeek: ON")))

(defun treemacs-dwim ()
  (interactive)
  (pcase (treemacs-current-visibility)
    ((or 'none 'exists)
     (setq treemacs-previous-window (list (selected-frame) (selected-window)))
     (treemacs))
    ((and 'visible (guard (not (s-contains? "Treemacs-Scoped"
                                            (buffer-name (current-buffer))))))
     (setq treemacs-previous-window (list (selected-frame) (selected-window)))
     (treemacs-select-window))
    (_ (select-frame (car treemacs-previous-window))(select-window (cadr treemacs-previous-window)))))t

(use-package yasnippet
  :config
  (setq yas-snippet-dirs `(,my/yas-directory))
  (yas-global-mode 1))

(use-package magit)

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
  :config
  ;; these depend on the 'straight.el fixes' above
  (defalias #'org-git-version #'fix-org-git-version)
  (defalias #'org-release #'fix-org-release)
  (require 'org-habit)
  (require 'org-indent)
  (add-to-list 'org-modules 'org-habit t)
  (require 'org-capture)
  (require 'org-tempo))

(when window-system
  (use-package org-beautify-theme
    :after (org)
    :config
    (setq org-fontify-whole-heading-line t)
    (setq org-fontify-quote-and-verse-blocks t)
    (setq org-hide-emphasis-markers t)))

(setq my/org-pretty-symbols nil)
(:hook org-mode
  (setq-local prettify-symbols-alist my/org-pretty-symbols))

(:hook org-mode 'org-indent-mode)

(use-package org-bullets
  :init
  (:hook org-mode 'org-bullets-mode)
  :config
  (setq org-bullets-bullet-list '("◉" "○" "✸" "•")))

(:push my/org-pretty-symbols
  '("[#A]" . "⇑")
  '("[#C]" . "⇓"))

;; only show priority cookie symbols on headings.
(defun nougat/org-pretty-compose-p (start end match)
  (if (or (string= match "[#A]") (string= match "[#C]"))
      ;; prettify asterisks in headings
      (org-match-line org-outline-regexp-bol)
    ;; else rely on the default function
    (funcall #'prettify-symbols-default-compose-p start end match)))


(:hook org-mode (setq-local prettify-symbols-compose-predicate
                            #'nougat/org-pretty-compose-p))

(:after org
  (setq org-ellipsis " ▿"))

(:push my/org-pretty-symbols
  '("#+begin_src" . ">>")
  '("#+end_src" . "·"))

(defun org-realign-tags ()
  (interactive)
  (setq org-tags-column (- 0 (window-width)))
  (org-align-tags t))

;; (:hook window-configuration-change 'org-realign-tags)

(setq org-startup-folded 'content)

(setq org-hide-block-startup nil)

(:hook org-mode 'turn-on-auto-fill)

(setq org-insert-heading-respect-content nil)

(advice-add 'org-link--open-help :override
            (lambda (path) (helpful-symbol (intern path))))

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


;; (:after org
;;   (:hook org-mode
;;     (:hook before-save :local
;;       (my/org-cleanup))))

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

(defun todo-org-todo-keyword-faces (sequences)
  (cl-loop for sequence in (todo-parse-sequences-data sequences)
           append (cl-loop for state in sequence
                           for name = (plist-get state :name)
                           for face = (plist-get state :face)
                           collect (cons name face))))
;; (todo-org-todo-keyword-faces todo-keywords)

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
             (line-props (org-plist-delete line-props 'face)))
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

(setq todo-keywords
      ;; normal workflow
      '((("DOING" "d" :icon "🏃" :face org-doing-face)
         ("TODO" "t" :icon "□ " :face org-todo-face)
         ("DONE" "D" :icon "✓ " :face org-done-face :done-state t))
        ;; auxillary states
        (("SOON" "s" :icon "❗ " :face org-soon-face)
         ("SOMEDAY" "S" :icon "🛌" :face org-doing-face)))
      org-todo-keywords (todo-org-todo-keywords todo-keywords)
      org-todo-keyword-faces (todo-org-todo-keyword-faces todo-keywords))

(--map (:push my/org-pretty-symbols it)
       (todo-prettify-symbols-alist todo-keywords))

(setq my/todo-sequences-data (todo-parse-sequences-data todo-keywords))
(:hook org-agenda-finalize
  (--each my/todo-sequences-data
    (-each it 'todo-finalize-agenda-for-state)))

(defun my/todo-sort (a b)
  (let* ((a-state (get-text-property 0 'todo-state a))
         (b-state (get-text-property 0 'todo-state b))
         (a-index (-elem-index a-state todo-keyword-order))
         (b-index (-elem-index b-state todo-keyword-order)))
    (pcase (- b-index a-index)
      ((and v (guard (< 0 v))) 1)
      ((and v (guard (> 0 v))) -1)
      (default nil))))

(setq org-agenda-cmp-user-defined 'my/todo-sort
      todo-keyword-order '("DOING" "SOON" "TODO" "SOMEDAY" "DONE"))

(setq org-directory my/org-directory)

(setq org-default-notes-file my/notes-file-name)

(:after org
  (:push org-capture-after-finalize-hook 'org-capture-goto-last-stored))



(use-package ob-csharp
  :straight (ob-csharp :type git
                       :host github
                       :repo "thomas-villagers/ob-csharp"
                       :files ("src/ob-csharp.el"))
  :config
  (:push org-babel-load-languages '(csharp . t)))

(use-package ob-fsharp
  :straight (ob-fsharp :type git
                       :host github
                       :repo "zweifisch/ob-fsharp"
                       :files ("ob-fsharp.el"))
  :config
  (:push org-babel-load-languages '(fsharp . t)))

(setq org-babel-load-languages
      '((shell . t)
        (emacs-lisp . t)
        (python . t)
        (js . t)
        (csharp . t)
        (fsharp . t)))

(:after org
  (setq org-babel-default-header-args
        '((:session . "none")
          (:results . "replace")
          (:exports . "code")
          (:cache . "no")
          (:noweb . "no")
          (:hlines . "no")
          (:tangle . "no"))))

(progn
  (setq org-confirm-babel-evaluate nil)
  (setq org-confirm-elisp-link-function nil)
  (setq org-confirm-shell-link-function nil)
  (setq safe-local-variable-values '((org-confirm-elisp-link-function . nil))))

(:hook after-init
  (org-babel-do-load-languages 'org-babel-load-languages
                               org-babel-load-languages))

(use-package helm-org)

(use-package helm-org-rifle)

(use-package org-projectile
  :config
  (org-projectile-per-project)
  (setq org-projectile-per-project-filepath "notes.org")
  (:push org-capture-templates
    (org-projectile-project-todo-entry
     :capture-character "l"
     :capture-heading "Linked Project TODO"))
  (:push org-capture-templates
    (org-projectile-project-todo-entry
     :capture-character "p")))

(use-package org-projectile-helm
  :after org-projectile
  :bind (("C-c n p" . org-projectile-helm-template-or-project)))

(setq my/org-agenda-nested nil)
(define-key org-agenda-mode-map (kbd "C-<return>")
  (lambda () (interactive)
    (unless my/org-agenda-nested
      (setq my/org-agenda-nested t)
      (with-current-buffer (marker-buffer (get-text-property (point) 'org-marker))
        (org-agenda nil "a" "<")))))

;; pop back to main agenda view, or quit
(defun my/org-agenda-quit ()
  (interactive)
  (org-agenda-quit)
  (when my/org-agenda-nested
    (setq my/org-agenda-nested nil)
    (org-agenda nil "a")))

(define-key org-agenda-mode-map (kbd "q") 'my/org-agenda-quit)

(defun org-agenda-transformer (it)
  (-let* (((blank todo rest) (s-split-up-to
                              "[[:blank:]]+"
                              (substring-no-properties it) 2))
          (buffer-name (->> it
                            (get-text-property 0 'org-marker)
                            (marker-buffer)
                            (buffer-file-name)))
          (file-name (->> buffer-name f-filename))
          (project-name (->> buffer-name (f-parent) (f-base)))
          (text (s-collapse-whitespace
                 (format "  %s %s/%s: %s" todo project-name file-name rest))))
    (set-text-properties 0 (- (length text) 1) (text-properties-at 0 it) text)
    text))

(defun org-agenda-schedule-transformer (it)
  (-let* (((_ _ _ rest) (s-split-up-to
                         "[[:blank:]]+"
                         (substring-no-properties it) 3))
          (todo (get-text-property 0 'todo-state it))
          (buffer-name (->> it
                            (get-text-property 0 'org-marker)
                            (marker-buffer)
                            (buffer-file-name)))
          (file-name (->> buffer-name f-filename))
          (project-name (->> buffer-name (f-parent) (f-base)))
          (text (s-collapse-whitespace
                 (format "  %s %s/%s: %s" todo project-name file-name rest))))
    (set-text-properties 0 (length text) (text-properties-at 0 it) text)
    text))

(defun org-agenda-group-items (item)
  (-when-let* ((new-marker (make-marker))
               (marker (or (get-text-property 0 'org-marker item)
                           (get-text-property 0 'org-hd-marker item)))
               (file-path (->> marker marker-buffer buffer-file-name))
               (file-name (f-filename file-path))
               (directory (f-dirname file-path))
               (directory-name (f-filename
                                (or (projectile-root-bottom-up file-path) directory)))
               (heading (s-replace "//" "/" (format "%s/%s" directory-name file-name))))
    (set-marker new-marker 1 (marker-buffer marker))
    (propertize heading 'org-marker new-marker 'org-hd-marker new-marker)))

(defun get-agenda-commands ()
  '(("a" "agenda view"
     ((agenda "" ((org-agenda-overriding-header "")
                  (org-agenda-span 'day)
                  (org-super-agenda-groups
                   '((:name "Today"
                            :transformer (org-agenda-schedule-transformer it)
                            :scheduled today)
                     (:name "Overdue"
                            :transformer (org-agenda-schedule-transformer it)
                            :scheduled past)))))
      (alltodo "" ((org-agenda-overriding-header "")
                   (org-super-agenda-groups
                    '(;; (:name "Today" :time-grid t :date today :todo "TODAY" :scheduled today)
                      (:discard (:scheduled today :scheduled past))
                      (:name "Active" :todo "DOING" :transformer (org-agenda-transformer it))
                      (:name "Important" :tag "Important" :priority "A")
                      (:name "Some Day" :todo "SOMEDAY" :transformer (org-agenda-transformer it) :order 5)
                      (:name "Todo" :auto-map org-agenda-group-items :todo "TODO")))))
      ))))

(use-package org-super-agenda
  :config
  (setq org-agenda-custom-commands (get-agenda-commands))
  (org-super-agenda-mode))

(setq org-agenda-todo-keyword-format ""
      org-agenda-prefix-format '((todo . "  %(org-get-todo-state)")))

(setq org-agenda-sorting-strategy
      '((agenda habit-down time-up priority-down category-keep)
        (todo user-defined-down priority-down category-keep)
        (tags priority-down category-keep)
        (search category-keep)))

(setq org-agenda-files (->> (append (f-glob (my/get-org-file "*/*.org"))
                                    (f-glob (my/get-project-directory "*/*.org")))
                            (-filter 'f-exists?)))

(use-package org-journal
  :config
  (setq org-journal-dir (concat my/org-directory "journal"))
  (setq org-journal-file-type 'weekly)
  (setq org-journal-start-on-weekday 5))

(use-package org-fragtog
  :config
  (:hook org-mode 'org-fragtog-mode))

(use-package linkmarks
  :straight (linkmarks :type git :host github :repo "dustinlacewell/linkmarks"))

(use-package org-ql)

(use-package helm-org-walk
  :straight (helm-org-walk :type git :host github :repo "dustinlacewell/helm-org-walk"))

(load-file (expand-file-name "~/src/org-ls/org-ls.el"))

(setq safe-local-variable-values '((org-confirm-elisp-link-function . nil)))

(use-package outshine
  :init (defvar outline-minor-mode-prefix "\M-#")
  :config (setq outshine-use-speed-commands t)
  :hook ((emacs-lisp-mode . outshine-mode) (nix-mode . outshine-mode)))

(use-package flycheck)

(use-package macrostep
  :straight (macrostep :type git :host github :repo "joddie/macrostep")
  :config
  (:bind emacs-lisp-mode "C-c e" macrostep-expand))

(use-package lispy
  :init
  (:hook emacs-lisp-mode (lispy-mode 1))
  (:hook lisp-interaction-mode (lispy-mode 1))
  :config
  (:bind lispy-mode ":" self-insert-command)
  (:bind lispy-mode "[" lispy-open-square)
  (:bind lispy-mode "]" lispy-close-square))

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
    (:hook python-mode jedi:setup)
    (setq jedi:complete-on-dot t)))

(use-package js2-mode
  :config
  (:push auto-mode-alist '("\\.js\\'" . js2-mode))
  (:hook js2-mode js2-imenu-extras-mode)
  (define-key js2-mode-map (kbd "C-k") #'js2r-kill)
  (define-key js-mode-map (kbd "M-.") nil)
  (setq js2-include-node-externs t)
  (setq js2-include-browser-externs t))

(use-package xref-js2
  :config
  (:hook js2-mode
    (:hook xref-backend-functions :local xref-js2-xref-backend)))

(use-package js2-refactor
  :config
  (:hook js2-mode js2-refactor-mode)
  (js2r-add-keybindings-with-prefix "C-c C-r"))

(use-package company-tern
  :config
  (setq tern-command '("npx" "tern"))
  (:push company-backends 'company-tern)
  (:hook js2-mode
    (tern-mode)
    (company-mode))

  ;; Disable completion keybindings, as we use xref-js2 instead
  (define-key tern-mode-keymap (kbd "M-.") nil)
  (define-key tern-mode-keymap (kbd "M-,") nil))

(use-package typescript-mode
  :config
  (flycheck-add-mode 'typescript-tslint 'web-mode))

(defun setup-tide-mode ()
  (interactive)
  (direnv-mode)
  (direnv-update-environment)
  (tide-setup)
  (flycheck-mode +1)
  (setq flycheck-check-syntax-automatically '(save mode-enabled))
  (setq tide-hl-identifier-idle-time 0.0)
  (eldoc-mode +1)
  (tide-hl-identifier-mode +1)
  (company-mode +1))

(use-package tide
  :config
  (:hook before-save tide-format-before-save)
  (:hook typescript-mode setup-tide-mode)
  (:push auto-mode-alist '("\\.tsx\\'" . web-mode))
  (:hook web-mode
    (when (string-equal "tsx" (file-name-extension buffer-file-name))
      (setup-tide-mode)))

  (:hook web-mode
    (when (string-equal "tsx" (file-name-extension buffer-file-name))
      (setup-tide-mode)))

  (flycheck-add-mode 'typescript-tslint 'web-mode))

(defun tide-cleanup-imports ()
  (interactive)
  (save-excursion
    (tide-organize-imports)
    (beginning-of-buffer)
    (while (search-forward-regexp "^import[[:space:]]+[[:alpha:]{},[:space:]]+\"" nil t)
      (embrace--insert ?\' (embrace--delete ?\" t)))
    (beginning-of-buffer)
    (when (search-forward-regexp "^import[[:space:]]+[[:alpha:]{},[:space:]]+\'[^[:alpha:]]" nil t)
      (beginning-of-line)
      (open-line 1))
    (progn
      (beginning-of-buffer)
      ;; search for first non-import line
      (while (or
              (string-match "\\(^import\\|^//\\)" (thing-at-point 'line t))
              (string-equal "\n" (thing-at-point 'line t)))
        (end-of-line)
        (forward-char))

      ;; delete all preceeding whitespace
      (while (progn (beginning-of-line)
                    (backward-char)
                    (beginning-of-line)
                    (string-equal "\n" (thing-at-point 'line t)))
        (kill-line))
      (end-of-line)
      (forward-char)
      (open-line 2))
    (tide-format)))

(use-package nim-mode)

(use-package yaml-mode
  :config
  (:push auto-mode-alist '("\\.yml\\'" . yaml-mode)))

(use-package prettier-js
  :config
  (setq prettier-js-args '("--tab-width" "4" "--trailing-comma" "all")))

(use-package add-node-modules-path)

(use-package json-mode
  :straight (json-mode :type git
                       :host github
                       :repo "kiennq/json-mode"
                       :branch "feat/jsonc-mode")
  :config
  (setf auto-mode-alist (assoc-delete-all "\\(?:\\(?:\\.\\(?:b\\(?:\\(?:abel\\|ower\\)rc\\)\\|json\\(?:ld\\)?\\)\\|composer\\.lock\\)\\'\\)" auto-mode-alist))
  (setf auto-mode-alist (assoc-delete-all "\\.json\\'" auto-mode-alist))
  (:push auto-mode-alist '("\\.json\\'" . jsonc-mode)))

(defun org-babel-execute:jsonc (body params)
  "Execute a block of jsonc with org-babel."
  body)

(defun org-babel-execute:json (body params)
  "Execute a block of json with org-babel."
  body)

(use-package web-mode
  :demand t
  :config
  (:push auto-mode-alist '("\\.tsx\\'" . web-mode))
  (:push auto-mode-alist '("\\.jsx\\'" . web-mode))
  (:push auto-mode-alist '("\\.html?\\'" . web-mode))
  (:push web-mode-engines-alist '(("django"    . "\\.html\\'")))
  (:hook web-mode (progn (prettier-js-mode)
                         (setq web-mode-markup-indent-offset 4)))
  (setq web-mode-content-types-alist '(("jsx" . "\\.js[x]?\\'")))
  (setq-default flycheck-disabled-checkers
                (append flycheck-disabled-checkers
                        '(javascript-jshint json-jsonlist)))
  (flycheck-add-mode 'javascript-eslint 'web-mode)
  (add-hook 'after-init-hook #'global-flycheck-mode)
  (add-hook 'flycheck-mode-hook 'add-node-modules-path))

(use-package go-mode
  :config (:hook go-mode
            (:hook before-save gofmt-before-save)
            (setq tab-width 4)
            (setq indent-tabs-mode 1)))

(use-package csharp-mode)

(:hook csharp-mode :local
  (company-mode)
  (flycheck-mode)

  (setq c-syntactic-indentation t)
  (c-set-style "ellemtel")
  (setq c-basic-offset 4)
  (setq truncate-lines t)
  (setq tab-width 4)

  (electric-pair-local-mode 1))

(use-package fsharp-mode
  :config
  (require 'eglot)
  (:push auto-mode-alist '("\\.fs[iylx]?$" . fsharp-mode)))

(use-package dockerfile-mode
  :mode "Dockerfile\\'")

(use-package nix-mode
  :straight (nix-mode :type git :host github :repo "NixOS/nix-mode")
  :mode "\\.nix\\'"
  :config
  (remove-hook 'before-save-hook #'nix-mode-format))

(use-package nix-sandbox)

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
  (:hook elfeed-search-update elfeed-font-size-hook)
  (advice-unadvice 'elfeed-show-entry)
  (advice-add 'elfeed-show-entry :after 'elfeed-show-refresh-advice))

(use-package elfeed-org
  :after (elfeed)
  :config
  (elfeed-org)
  (setq rmh-elfeed-org-files (list (my/get-org-file "notes.org"))))

(use-package embrace
  :config
  (embrace-add-pair (kbd "\;") "`" "`"))

(use-package htmlize)

(use-package emacsql-sqlite)

(use-package gist
  :straight (gist :type git :host github :repo "defunkt/gist.el"))

(use-package poker
  :straight (poker :type git :host github :repo "mlang/poker.el"))

(use-package decide
  :straight (decide :type git :host github :repo "lifelike/decide-mode"))

;; (eval `(use-package sutysisku
;;    :demand t
;;    :straight (sutysisku :local-repo ,(my/get-project-directory "sutysisku.el/"))))

(use-package plantuml-mode
  :config
  (setq plantuml-jar-path "/nix/store/slmi57xig7mbif52sf757arx5sbj2bni-plantuml-1.2020.15/lib/plantuml.jar")
  (setq plantuml-default-exec-mode 'jar))

(use-package pretty-hydra
  :demand t
  :straight (pretty-hydra :type git :host github
                          :repo "jerrypnz/major-mode-hydra.el"
                          :branch "c6554ea"
                          :files ("pretty-hydra.el")))

(use-package major-mode-hydra
  :straight (major-mode-hydra :type git :host github
                              :repo "jerrypnz/major-mode-hydra.el"
                              :branch "c6554ea"
                              :files ("major-mode-hydra.el")))

(use-package hera
  :demand t
  :straight (hera :type git :host github :repo "dustinlacewell/hera"))

(defun :hydra/inject-hint (symbol hint)
  (-let* ((name (symbol-name symbol))
          (hint-symbol (intern (format "%s/hint" name)))
          (format-form (eval hint-symbol))
          (string-cdr (nthcdr 1 format-form))
          (format-string (string-trim (car string-cdr)))
          (amended-string (format "%s\n\n%s" format-string hint)))
    (setcar string-cdr amended-string)))

(defun :hydra/make-head-hint (head default-color)
  (-let (((key _ hint . rest) head))
    (when key
      (-let* (((&plist :color color) rest)
              (color (or color default-color))
              (face (intern (format "hydra-face-%s" color)))
              (propertized-key (propertize key 'face face)))
        (format " [%s]: %s" propertized-key hint)))))

(defun :hydra/make-hint (heads default-color)
  (string-join
   (cl-loop for head in heads
            for hint = (:hydra/make-head-hint head default-color)
            do (pp hint)
            collect hint) "\n"))

(defun :hydra/clear-hint (head)
  (-let* (((key form _ . rest) head))
    `(,key ,form nil ,@rest)))

(defun :hydra/add-exit-head (heads)
  (let ((exit-head '("SPC" (hera-pop) "to exit" :color blue)))
    (append heads `(,exit-head))))

(defun :hydra/add-heads (columns extra-heads)
  (let* ((cell (nthcdr 1 columns))
         (heads (car cell))
         (extra-heads (mapcar ':hydra/clear-hint extra-heads)))
    (setcar cell (append heads extra-heads))))

(defmacro :hydra (name body columns &optional extra-heads)
  (declare (indent defun))
  (-let* (((&plist :color default-color :major-mode mode) body)
          (extra-heads (:hydra/add-exit-head extra-heads))
          (extra-hint (:hydra/make-hint extra-heads default-color))
          (body (plist-put body :hint nil))
          (body-name (format "%s/body" (symbol-name name)))
          (body-symbol (intern body-name))
          (mode-body-name (major-mode-hydra--body-name-for mode))
          (mode-support
           `(when ',mode
              (defun ,mode-body-name () (interactive) (,body-symbol)))))
    (:hydra/add-heads columns extra-heads)
    (when mode
      (cl-remf body :major-mode))
    `(progn
       (pretty-hydra-define ,name ,body ,columns)
       (:hydra/inject-hint ',name ,extra-hint)
       ,mode-support
       )))

;; (macroexpand-all `(:hydra hydra-test (:color red :major-mode fundamental-mode)
;;    ("First"
;;     (("a" (message "first - a") "msg a" :color blue)
;;      ("b" (message "first - b") "msg b"))
;;     "Second"
;;     (("c" (message "second - c") "msg c" :color blue)
;;      ("d" (message "second - d") "msg d")))))

;; (:hydra hydra-test (:color red :major-mode fundamental-mode)
;;    ("First"
;;     (("a" (message "first - a") "msg a" :color blue)
;;      ("b" (message "first - b") "msg b"))
;;     "Second"
;;     (("c" (message "second - c") "msg c" :color blue)
;;      ("d" (message "second - d") "msg d"))))

(:hydra hydra-bookmarks (:color blue)
  ("Bookmarks" (("n" (linkmarks-capture) "new")
                ("b" (linkmarks-select) "browse")
                ("e" (find-file my/bookmarks-file-name)))))

(:hydra hydra-help (:color blue)
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

(:hydra hydra-mark (:color pink)
  ("Mark"
   (("m" push-mark "mark here")
    ("p" (lambda () (interactive) (set-mark-command '(4))) "previous")
    ("n" (lambda () (interactive) (unpop-to-mark-command)) "next")
    ("c" (lambda () (interactive) (setq mark-ring nil)) "clear"))))

(:hydra hydra-registers (:color pink)
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

(:hydra hydra-window (:color red)
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

(:hydra hydra-zoom (:color red)
  ("Buffer"
   (("i" text-scale-increase "in")
    ("o" text-scale-decrease "out"))
   "Frame"
   (("I" zoom-frm-in "in")
    ("O" zoom-frm-out "out")
    ("r" toggle-zoom-frame "reset" :color blue))))

(:hydra hydra-nix (:color blue)
  ("Nix" (("p" (progn (find-file (my/get-org-file "nixpkgs.org"))
                      (helm-org-in-buffer-headings)
                      (recenter-top-bottom 1)
                      (org-narrow-to-subtree)
                      (sit-for 5)
                      (widen)) "nixpkgs"))))

(:hydra hydra-docs (:color blue)
  ("Docs" (("n" (hera-push 'hydra-nix/body) "Nix"))))

(require 'helm-org-walk)

(:hydra hydra-notes (:color blue)
  ("Notes"
   (("o" (helm-org-walk '(4)) "open")
    ("s" (helm-org-rifle-org-directory) "search")
    ("S" (helm-org-rifle-occur-org-directory) "occur")
    ("q" (helm-org-ql-org-directory) "query")
    ("n" (helm-org-walk my/notes-file-name) "notes"))))

(:hydra hydra-gist (:color blue)
  ("Gist" (("p" (gist-region-or-buffer) "public")
           ("P" (gist-region-or-buffer-private) "private")
           ("b" (browse-url "https://gist.github.com/dustinlacewell") "browse"))))

(:hydra hydra-projectile (:color blue)
  ("Open"
   (("o" (helm-projectile-switch-project) "project")
    ("p" (helm-projectile) "project asset")
    ("f" (helm-projectile-find-file-dwim) "file")
    ("b" (helm-projectile-switch-to-buffer) "buffer")
    ("r" (projectile-readme) "readme")
    ("w" (hydra-treemacs/body) "workspace"))
   "Do"
   (("s" (helm-projectile-ag) "search")
    ("c" (org-projectile-helm-template-or-project) "capture"))
   "Cache"
   (("C" projectile-invalidate-cache "clear cache")
    ("x" (projectile-remove-known-project) "remove this project")
    ("X" (projectile-cleanup-known-projects) "cleanup missing"))))

(:hydra hydra-default (:color blue)
  ("Open"
   (("a" (org-agenda nil "a") "agenda")
    ("p" (hera-push 'hydra-projectile/body) "projectile")
    ("o" (hera-push 'hydra-notes/body) "org")
    ("j" (call-interactively 'org-journal-new-entry) "new journal entry")
    ("J" (org-journal-new-entry '(4)) "open journal")
    ("b" (hera-push 'hydra-bookmarks/body) "bookmarks"))
   "Emacs"
   (("h" (hera-push 'hydra-help/body) "help")
    ("m" (hera-push 'hydra-mark/body) "mark")
    ("w" (hera-push 'hydra-window/body) "windows")
    ("z" (hera-push 'hydra-zoom/body) "zoom")
    ("r" (hera-push 'hydra-registers/body) "registers"))
   "Misc"
   (("d" (hera-push 'hydra-docs/body) "docs")
    ("g" (hera-push 'hydra-gist/body) "gist")
    (";" embrace-commander "embrace"))))

(defun my/hydra-dwim ()
  (interactive)
  (let* ((mode major-mode)
        (orig-mode mode))
    (catch 'done
      (while mode
        (let ((hydra (major-mode-hydra--body-name-for mode)))
          (when (fboundp hydra)
            (hera-start hydra)
            (throw 'done t)))
        (setq mode (get mode 'derived-mode-parent)))
      (hera-start 'hydra-default/body))))

(:hydra hydra-yank-pop (:color red)
  ("Yank/Pop"
   (("y" (yank-pop 1) "previous")
    ("Y" (yank-pop -1) "next")
    ("l" helm-show-kill-ring "list" :color blue))))

(:bind "C-y"
  (yank)
  (hydra-yank-pop/body))

(:hydra hydra-elisp (:color blue :major-mode emacs-lisp-mode)
  ("Execute"
   (("d" eval-defun "defun")
    ("b" eval-current-buffer "buffer")
    ("r" eval-region "region"))
   "Debug"
   (("D" edebug-defun "defun")
    ("a" edebug-all-defs "all definitions" :color red)
    ("A" edebug-all-forms "all forms" :color red)
    ("x" macrostep-expand "expand macro"))))

(:hydra hydra-tide (:color blue :major-mode typescript-mode)
  ("Server"
   (("r" tide-restart-server "restart")
    ("k" tide-kill-server "kill")
    ("C" tide-do-cleanups "cleanup"))
   "Actions"
   (("f" tide-fix "fix")
    ("F" tide-cleanup-imports "format")
    ("r" tide-references "references")
    ("R" tide-rename-symbol "rename")
    ("e" tide-refactor "extract"))
   "Errors"
   (("p" tide-error-at-point "error at point")
    ("P" tide-project-errors "project errors"))))

(:hydra hydra-treemacs (:color red)
  ("Workspace"
   (("o" treemacs-switch-workspace "open")
    ("n" treemacs-create-workspace "new")
    ("k" treemacs-delete-workspace "kill")
    ("r" treemacs-rename-workspace "rename"))))

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

(:hydra hydra-org (:color red :major-mode org-mode)
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
   (("t" (org-babel-tangle) "tangle" :color blue)
    ("e" (org-html-export-to-html) "export" :color blue)
    ("b" helm-org-in-buffer-headings "browse")
    ("r" (lambda () (interactive)
           (helm-org-rifle-current-buffer)
           (org-cycle)
           (org-cycle)) "rifle")
    ("w" helm-org-walk "walk")
    ("v" avy-org-goto-heading-timer "avy")
    ("L" org-toggle-link-display "toggle links"))))

(defun js2r-toggle-async ()
  (interactive)
  (if (string-equal "async" (thing-at-point 'word))
      (progn
        (search-forward "function")
        (backward-word)))
  (js2r-toggle-function-async))

(:hydra hydra-js (:color blue :major-mode js2-mode)
  ("Eval"
   (("f" js2-eval-defun "function")
    ("e" js2-eval "expression"))
   "Extract"
   (("f" js2r-extract-function "function")
    ("m" js2r-extract-method "method")
    ("v" js2r-extract-var "var")
    ("l" js2r-extract-let "let")
    ("c" js2r-extract-let "const"))
   "Funcs"
   (("a" js2r-toggle-arrow-function-and-expression "arrow" :color red)
    ("A" js2r-toggle-async "async" :color red)
    ("O" js2r-arguments-to-object "object param"))
   "Vars"
   (("r" js2r-rename-var "rename")
    ("i" js2r-inline-var "inline"))
   "Misc"
   (("k" js2r-kill "kill" :color red)
    ("t" js2r-string-to-template "string to template")
    ("l" js2r-log-this "log expr")
    ("w" js2r-wrap-buffer-in-iife "wrap in iife")
    ("G" js2r-inject-global-in-iife "global for iife"))))

(when (string-equal system-type "gnu/linux")

(setq exec-path-from-shell-check-startup-files nil)

(load-file "~/.config/wpg/templates/theme.el")
(enable-theme 'xresources)
;; (use-package dracula-theme
;;   :config (enable-theme 'dracula))

(defun theme-callback (event)
  (load-file "~/.config/wpg/templates/theme.el")
  (enable-theme 'xresources))

(require 'filenotify)
(setq theme-watch-handle
      (file-notify-add-watch
       "/home/ldlework/.config/wpg/templates/theme.el" '(change) 'theme-callback))

(setq powerline-height 32)
(set-face-attribute 'default nil :family "New Times Roman" :weight 'light)

(use-package unicode-fonts
  :config
  (unicode-fonts-setup)
  (set-face-attribute 'default nil :font "Source Code Pro")
  ;(set-fontset-font "fontset-default" 'unicode "Consolas" nil)
  (set-fontset-font "fontset-default" 'unicode "DejaVu Sans Mono" nil)
  (set-fontset-font "fontset-default" 'unicode "Symbola" nil)
 )

(setq ispell-program-name (concat my/home-directory ".nix-profile/bin/aspell"))

(setq x-gtk-use-system-tooltips nil)

;; (set-face-attribute
;;  'helm-selection nil
;;  :inherit t
;;  :background (theme-color 'blue)
;;  :foreground (theme-color 'background)
;;  :height 1.0
;;  :weight 'ultra-bold
;;  :inverse-video nil)

;; (set-face-attribute
;;  'helm-source-header nil
;;  :inherit nil
;;  :underline nil
;;  :background (theme-color 'background)
;;  :foreground (theme-color 'light-red)
;;  :height 1.9)

;; (set-face-attribute
;;  'helm-header nil
;;  :inherit nil
;;  :height 0.8
;;  :background (theme-color 'background)
;;  :foreground (theme-color 'cyan))

;; (set-face-attribute
;;  'helm-separator nil
;;  :height 0.8
;;  :foreground (theme-color 'light-red))

;; (set-face-attribute
;;  'helm-match nil
;;  :weight 'bold
;;  :foreground (theme-color 'green))

(require 'helm-external)
(setq helm-external-commands-list
      (seq-filter (lambda (v) (not (string-match "^\\." v)))
                  (helm-external-commands-list-1 'sort)))

)

(use-package omnisharp)

(:after company
  (:push company-backends #'company-omnisharp))

(defun my-linux-csharp-mode-setup ()
  (omnisharp-mode)
  (local-set-key (kbd "C-c r r") 'omnisharp-run-code-action-refactoring)
  (local-set-key (kbd "C-c C-c") 'recompile))

(:hook csharp-mode my-linux-csharp-mode-setup t)

(when (string-equal system-type "windows-nt")

(use-package dracula-theme)

)

(setq org-html-htmlize-output-type 'css)
(setq org-html-head-include-default-style nil)
