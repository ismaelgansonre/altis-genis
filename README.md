# Altis Genis - Laravel + React

Application web moderne construite avec Laravel 12, React 19, TypeScript, Inertia.js et Tailwind CSS.

## 📋 Table des matières

- [Prérequis](#-prérequis)
- [Installation](#-installation)
- [Configuration](#️-configuration)
- [Démarrage du projet](#-démarrage-du-projet)
- [Scripts disponibles](#-scripts-disponibles)
- [Structure du projet](#-structure-du-projet)
- [Technologies utilisées](#-technologies-utilisées)
- [Dépannage](#-dépannage)

## 🔧 Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- **PHP** >= 8.2 ([Télécharger PHP](https://www.php.net/downloads))
- **Composer** >= 2.0 ([Installer Composer](https://getcomposer.org/download/))
- **Node.js** >= 18.0 ([Télécharger Node.js](https://nodejs.org/))
- **npm** >= 9.0 (inclus avec Node.js)
- **SQLite** (ou MySQL/PostgreSQL si vous préférez)

### Vérifier les versions installées

```bash
php --version
composer --version
node --version
npm --version
```

## 📦 Installation

### 1. Cloner le projet (si ce n'est pas déjà fait)

```bash
git clone <url-du-repo>
cd altis-genis
```

### 2. Installation automatique (recommandé)

La méthode la plus simple pour configurer le projet :

```bash
composer run setup
```

Cette commande va :
- Installer les dépendances PHP
- Créer le fichier `.env` à partir de `.env.example`
- Générer la clé d'application Laravel
- Exécuter les migrations de base de données
- Installer les dépendances Node.js
- Compiler les assets frontend

### 3. Installation manuelle (alternative)

Si vous préférez installer étape par étape :

#### a. Installer les dépendances PHP

```bash
composer install
```

#### b. Configurer l'environnement

```bash
# Copier le fichier d'environnement
cp .env.example .env

# Générer la clé d'application
php artisan key:generate
```

#### c. Créer la base de données

```bash
# Pour SQLite (par défaut)
touch database/database.sqlite

# Exécuter les migrations
php artisan migrate
```

#### d. Installer les dépendances Node.js

```bash
npm install
```

#### e. Compiler les assets

```bash
npm run build
```

## ⚙️ Configuration

### Configuration de la base de données

Le projet utilise **SQLite** par défaut. Si vous souhaitez utiliser MySQL ou PostgreSQL :

1. Ouvrez le fichier `.env`
2. Modifiez les paramètres de connexion :

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=altis_genis
DB_USERNAME=root
DB_PASSWORD=votre_mot_de_passe
```

3. Créez la base de données et exécutez les migrations :

```bash
php artisan migrate
```

### Configuration de l'application

Dans le fichier `.env`, vous pouvez personnaliser :

```env
APP_NAME="Altis Genis"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000
```

## 🚀 Démarrage du projet

### Mode développement (recommandé)

Cette commande démarre tous les services nécessaires en une seule fois :

```bash
composer run dev
```

Cela va lancer simultanément :
- 🌐 **Serveur Laravel** sur `http://localhost:8000`
- ⚡ **Vite dev server** pour le hot reload React
- 📨 **Queue worker** pour les tâches en arrière-plan
- 📋 **Pail** pour les logs en temps réel

L'application sera accessible à l'adresse : **http://localhost:8000**

### Démarrage manuel (alternative)

Si vous préférez lancer les services séparément :

#### Terminal 1 : Serveur PHP Laravel

```bash
php artisan serve
```

#### Terminal 2 : Serveur de développement Vite (React)

```bash
npm run dev
```

#### Terminal 3 : Queue worker (optionnel)

```bash
php artisan queue:listen
```

### 💻 Utilisation avec VS Code (Recommandé)

Le projet inclut des configurations VS Code pour faciliter le développement.

#### Lancer le projet depuis VS Code

1. Ouvrez le projet dans VS Code
2. Appuyez sur `F5` ou allez dans **Run and Debug** (Ctrl+Shift+D)
3. Sélectionnez **"🚀 Lancer tout (Laravel + React + Queue + Logs)"**
4. Cliquez sur le bouton ▶️ (Play)

Le navigateur s'ouvrira automatiquement sur `http://localhost:8000` !

#### Configurations disponibles

- **🚀 Lancer tout** - Lance tous les services en une seule fois (recommandé)
- **🌐 Serveur Laravel uniquement** - Lance seulement le serveur PHP
- **⚡ Vite Dev Server uniquement** - Lance seulement le serveur Vite pour React
- **📨 Queue Worker** - Lance le worker pour les tâches en arrière-plan
- **📋 Logs (Pail)** - Affiche les logs en temps réel
- **🎯 Développement complet (Manuel)** - Lance tous les services séparément
- **🐛 Debug PHP (XDebug)** - Pour déboguer le code PHP

#### Tâches VS Code disponibles

Appuyez sur `Ctrl+Shift+P` puis tapez "Tasks: Run Task" pour accéder à :

- **🔧 Installation complète** - Exécute `composer run setup`
- **📦 Installer dépendances PHP** - Exécute `composer install`
- **📦 Installer dépendances Node.js** - Exécute `npm install`
- **🗄️ Exécuter les migrations** - Exécute `php artisan migrate`
- **🔄 Rafraîchir la base de données** - Exécute `php artisan migrate:fresh --seed`
- **🏗️ Compiler assets (production)** - Exécute `npm run build`
- **🧹 Nettoyer tous les caches** - Nettoie tous les caches Laravel
- **⚡ Optimiser pour production** - Optimise l'application pour la production
- **🧪 Exécuter les tests** - Lance les tests PHPUnit
- **✨ Formater le code** - Formate le code avec Prettier
- **🔍 Linter le code** - Vérifie le code avec ESLint
- **📝 Vérifier les types TypeScript** - Vérifie les types TypeScript

#### Extensions VS Code recommandées

À l'ouverture du projet, VS Code vous proposera d'installer les extensions recommandées :

**Extensions PHP & Laravel :**
- Intelephense (autocomplétion PHP)
- PHP Debug (débogage avec XDebug)
- Laravel Extra Intellisense
- Laravel Blade
- Blade Formatter

**Extensions JavaScript/TypeScript & React :**
- ESLint
- Prettier
- ES7+ React/Redux/React-Native snippets

**Extensions CSS :**
- Tailwind CSS IntelliSense

**Extensions utiles :**
- EditorConfig
- DotENV
- Error Lens
- GitLens
- Path Intellisense
- TODO Highlight



## 📜 Scripts disponibles

### Scripts Composer (Backend PHP)

```bash
# Configuration initiale complète
composer run setup

# Démarrage en mode développement
composer run dev

# Démarrage avec SSR (Server-Side Rendering)
composer run dev:ssr

# Exécuter les tests
composer run test
```

### Scripts NPM (Frontend React)

```bash
# Démarrage du serveur de développement Vite
npm run dev

# Compilation pour la production
npm run build

# Compilation avec SSR
npm run build:ssr

# Vérification du formatage du code
npm run format:check

# Formatage automatique du code
npm run format

# Linting et correction automatique
npm run lint

# Vérification des types TypeScript
npm run types
```

### Commandes Artisan utiles

```bash
# Créer un nouveau contrôleur
php artisan make:controller NomController

# Créer un nouveau modèle avec migration
php artisan make:model NomModele -m

# Rafraîchir la base de données avec les seeders
php artisan migrate:fresh --seed

# Nettoyer le cache
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear

# Lister toutes les routes
php artisan route:list
```

## 📁 Structure du projet

```
altis-genis/
├── app/                    # Code PHP de l'application
│   ├── Http/              # Contrôleurs, Middleware, Requests
│   ├── Models/            # Modèles Eloquent
│   └── ...
├── bootstrap/             # Fichiers de démarrage Laravel
├── config/                # Fichiers de configuration
├── database/              # Migrations, seeders, factories
│   ├── migrations/
│   └── database.sqlite    # Base de données SQLite
├── public/                # Point d'entrée public (index.php)
├── resources/             # Vues, assets frontend
│   ├── css/              # Styles CSS
│   ├── js/               # Code React/TypeScript
│   │   ├── components/   # Composants React
│   │   ├── layouts/      # Layouts de l'application
│   │   ├── pages/        # Pages Inertia
│   │   └── app.tsx       # Point d'entrée React
│   └── views/            # Templates Blade (minimal avec Inertia)
├── routes/                # Définition des routes
│   ├── web.php           # Routes web
│   └── api.php           # Routes API
├── storage/               # Fichiers générés (logs, cache, uploads)
├── tests/                 # Tests automatisés
├── vendor/                # Dépendances PHP (Composer)
├── node_modules/          # Dépendances Node.js
├── .env                   # Configuration d'environnement
├── composer.json          # Dépendances PHP
├── package.json           # Dépendances Node.js
├── vite.config.ts         # Configuration Vite
└── tsconfig.json          # Configuration TypeScript
```

## 🛠 Technologies utilisées

### Backend (PHP)
- **Laravel 12** - Framework PHP moderne
- **Inertia.js** - Pont entre Laravel et React
- **Laravel Fortify** - Authentification
- **Laravel Wayfinder** - Navigation

### Frontend (React)
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Framework CSS utilitaire
- **Vite 7** - Build tool ultra-rapide
- **shadcn/ui** - Composants UI
- **Radix UI** - Primitives UI accessibles
- **Lucide React** - Icônes

### Outils de développement
- **ESLint** - Linting JavaScript/TypeScript
- **Prettier** - Formatage de code
- **PHPUnit** - Tests PHP
- **Pail** - Visualisation des logs

## 🌐 Déploiement sur hébergement mutualisé (Hostinger, etc.)

### Prérequis de l'hébergement

Assurez-vous que votre hébergement dispose de :
- **PHP** >= 8.2
- **Composer** (ou accès SSH pour l'installer)
- **Base de données MySQL** ou **PostgreSQL**
- **Accès SSH** (recommandé mais pas obligatoire)
- **Node.js** (pour compiler les assets en local avant upload)

### Étape 1 : Préparer le projet en local

#### 1.1 Compiler les assets pour la production

```bash
# Installer les dépendances
npm install

# Compiler pour la production
npm run build
```

Cela va créer les fichiers optimisés dans le dossier `public/build/`.

#### 1.2 Optimiser Laravel pour la production

```bash
# Optimiser l'autoloader
composer install --optimize-autoloader --no-dev

# Mettre en cache les configurations
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Étape 2 : Créer le fichier .htaccess pour le dossier racine

Créez un fichier `.htaccess` à la racine de votre projet (si ce n'est pas déjà fait) :

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteRule ^(.*)$ public/$1 [L]
</IfModule>
```

### Étape 3 : Configurer la base de données

#### 3.1 Créer une base de données MySQL

Dans le panneau de contrôle de votre hébergement (cPanel, hPanel, etc.) :
1. Créez une nouvelle base de données MySQL
2. Créez un utilisateur et notez les informations :
   - Nom de la base de données
   - Nom d'utilisateur
   - Mot de passe
   - Hôte (généralement `localhost`)

#### 3.2 Configurer le fichier .env

Créez un fichier `.env` à la racine du projet avec ces paramètres :

```env
APP_NAME="Altis Genis"
APP_ENV=production
APP_KEY=base64:VOTRE_CLE_GENEREE
APP_DEBUG=false
APP_URL=https://votre-domaine.com

LOG_CHANNEL=stack
LOG_LEVEL=error

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=nom_de_votre_base
DB_USERNAME=votre_utilisateur
DB_PASSWORD=votre_mot_de_passe

BROADCAST_CONNECTION=log
FILESYSTEM_DISK=local
QUEUE_CONNECTION=database

CACHE_STORE=database
SESSION_DRIVER=database
SESSION_LIFETIME=120

MAIL_MAILER=smtp
MAIL_HOST=smtp.hostinger.com
MAIL_PORT=587
MAIL_USERNAME=votre@email.com
MAIL_PASSWORD=votre_mot_de_passe_email
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="votre@email.com"
MAIL_FROM_NAME="${APP_NAME}"
```

**Important** : Générez une nouvelle clé d'application :
```bash
php artisan key:generate
```

### Étape 4 : Uploader les fichiers

#### Option A : Via FTP/SFTP (FileZilla, WinSCP, etc.)

1. Connectez-vous à votre hébergement via FTP/SFTP
2. Uploadez **tous les fichiers** du projet dans le dossier `public_html` ou `www`
3. **Important** : Assurez-vous d'uploader aussi les fichiers cachés (`.env`, `.htaccess`)

#### Option B : Via SSH (Recommandé)

```bash
# Se connecter en SSH
ssh votre_utilisateur@votre_domaine.com

# Aller dans le dossier public_html
cd public_html

# Cloner le projet (ou uploader via Git)
git clone votre-repo.git .

# Installer les dépendances PHP
composer install --optimize-autoloader --no-dev

# Configurer les permissions
chmod -R 755 storage bootstrap/cache
```

### Étape 5 : Configurer les permissions

Les dossiers suivants doivent être accessibles en écriture :

```bash
chmod -R 755 storage
chmod -R 755 bootstrap/cache
```

Ou via FTP : clic droit → Permissions → 755

### Étape 6 : Exécuter les migrations

Via SSH :
```bash
php artisan migrate --force
```

Ou créez un fichier temporaire `migrate.php` à la racine :
```php
<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->call('migrate', ['--force' => true]);
echo "Migrations exécutées avec succès !";
```

Accédez à `https://votre-domaine.com/migrate.php` puis **supprimez ce fichier**.

### Étape 7 : Configuration spécifique Hostinger

#### 7.1 Modifier le fichier public/.htaccess

Ajoutez ces lignes au début du fichier `public/.htaccess` :

```apache
# Forcer HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Configuration PHP (si nécessaire)
<IfModule mod_php.c>
    php_value upload_max_filesize 64M
    php_value post_max_size 64M
    php_value max_execution_time 300
    php_value max_input_time 300
</IfModule>
```

#### 7.2 Créer un fichier php.ini (si nécessaire)

Si vous avez besoin de configurations PHP spécifiques, créez un fichier `php.ini` dans `public/` :

```ini
upload_max_filesize = 64M
post_max_size = 64M
max_execution_time = 300
memory_limit = 256M
```

### Étape 8 : Structure finale sur l'hébergement

```
public_html/
├── app/
├── bootstrap/
├── config/
├── database/
├── public/              # Contenu servi publiquement
│   ├── build/          # Assets compilés
│   ├── .htaccess
│   └── index.php
├── resources/
├── routes/
├── storage/
├── vendor/
├── .env                # IMPORTANT : Ne jamais commiter ce fichier
├── .htaccess          # Redirige vers public/
├── artisan
└── composer.json
```

### Étape 9 : Vérification et tests

1. Accédez à votre site : `https://votre-domaine.com`
2. Vérifiez que la page d'accueil s'affiche correctement
3. Testez l'authentification et les fonctionnalités principales

### Étape 10 : Optimisations post-déploiement

```bash
# Nettoyer le cache
php artisan cache:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Optimiser Composer
composer dump-autoload --optimize
```

### 🔄 Mise à jour du site en production

Pour mettre à jour votre site après des modifications :

```bash
# En local : compiler les nouveaux assets
npm run build

# Sur le serveur (via SSH)
git pull origin main
composer install --optimize-autoloader --no-dev
php artisan migrate --force
php artisan cache:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### ⚠️ Points importants pour la production

1. **Sécurité** :
   - `APP_DEBUG=false` dans `.env`
   - Ne jamais commiter le fichier `.env`
   - Utiliser HTTPS (certificat SSL)

2. **Performance** :
   - Activer le cache des configurations
   - Utiliser `--optimize-autoloader` avec Composer
   - Compiler les assets en production (`npm run build`)

3. **Base de données** :
   - Faire des sauvegardes régulières
   - Utiliser MySQL au lieu de SQLite en production

4. **Logs** :
   - Vérifier régulièrement les logs dans `storage/logs/`
   - Configurer `LOG_LEVEL=error` en production

### 🆘 Problèmes courants en production

#### Erreur 500 - Internal Server Error

```bash
# Vérifier les permissions
chmod -R 755 storage bootstrap/cache

# Vérifier les logs
tail -f storage/logs/laravel.log
```

#### Page blanche

```bash
# Nettoyer tous les caches
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

#### Assets CSS/JS ne se chargent pas

Vérifiez que `APP_URL` dans `.env` correspond à votre domaine :
```env
APP_URL=https://votre-domaine.com
```

## 🐛 Dépannage

### Problème : "ERR_EMPTY_RESPONSE" ou la page ne charge pas

**Cause** : Le serveur Laravel n'est pas démarré ou tourne sur un port différent.

**Solution** :

```bash
# Vérifier si un serveur tourne déjà
lsof -i :8000

# Si un processus existe, l'arrêter
pkill -f "php artisan serve"

# Démarrer le serveur
composer run dev
```

Vérifiez dans la sortie du terminal sur quel port le serveur a démarré. Si le port 8000 est occupé, Laravel utilisera automatiquement 8001, 8002, etc.

### Problème : "Address already in use" (Port déjà utilisé)

**Solution 1** : Utiliser un autre port

```bash
php artisan serve --port=8001
```

**Solution 2** : Arrêter le processus qui utilise le port

```bash
# Trouver le processus sur le port 8000
lsof -i :8000

# Arrêter le processus (remplacer PID par le numéro du processus)
kill PID
```

### Problème : "Class 'PDO' not found"

Activez l'extension PDO dans votre `php.ini` :

```ini
extension=pdo_sqlite
extension=pdo_mysql  # Si vous utilisez MySQL
```

### Problème : "Permission denied" sur storage/

```bash
chmod -R 775 storage bootstrap/cache
```

### Problème : Les modifications React ne se reflètent pas

```bash
# Arrêtez le serveur et nettoyez le cache
npm run build
php artisan config:clear
php artisan cache:clear
```

### Problème : Port 8000 déjà utilisé

```bash
# Utilisez un autre port
php artisan serve --port=8001
```

### Problème : Erreurs de dépendances Node.js

```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules package-lock.json
npm install
```

### Problème : Base de données verrouillée (SQLite)

```bash
# Arrêtez tous les processus et supprimez le fichier de verrouillage
rm database/database.sqlite-shm database/database.sqlite-wal
```

## 📚 Ressources

- [Documentation Laravel](https://laravel.com/docs)
- [Documentation React](https://react.dev)
- [Documentation Inertia.js](https://inertiajs.com)
- [Documentation Tailwind CSS](https://tailwindcss.com)
- [Documentation shadcn/ui](https://ui.shadcn.com)

## 📝 Licence

Ce projet est sous licence MIT.

---

**Bon développement ! 🚀**
