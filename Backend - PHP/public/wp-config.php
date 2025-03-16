<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'PMK_IYk6/B .(]6y@R%cO1hA54`ETxF`gZmlFpwYxnFmwb{V-a=z|0D4~J]0I78o' );
define( 'SECURE_AUTH_KEY',   'KHK6Jfr-]Zik}$J{!TtNa+6!|5#MO%]Uj6u);AV6me`#-&ti$9^{6:pA#E@-J~^L' );
define( 'LOGGED_IN_KEY',     '_@gKYdq56*]RF4Pjpi&%]wgqq@0pfWl!)sM$jT6f%;%6+=-M*MXoKr#*ge=Zk!)t' );
define( 'NONCE_KEY',         '6<~PF4MlR|*)!^FR7!&be~FQuT;OAh`%l<9t&T8Wzi0T%N>!Gy(?SG|T0tZ1^>Jn' );
define( 'AUTH_SALT',         'LCT$^&iY^LTW!<igz=TE9_RP DGf:@J;`A=;pLn NJC;4F0[7^q*;i%R;wSrT}(<' );
define( 'SECURE_AUTH_SALT',  'eDaUtN/F|+l>G~b9R{:u|1=2X~; pJ|4<&/#co@x@gv`)[7yyuxw[qq=Nm@)9e4]' );
define( 'LOGGED_IN_SALT',    'L;9=25o*rChB(NYcITBP9)yA{iF+2!%hjdMKp:?OPPsC&0A7h!Axi]z%By=|15-,' );
define( 'NONCE_SALT',        'utU!/ R/1ce)As4mk;8~)0nz%[E:VV4{Fc!NCF[LAC=AN]JT%]7rgStl!yk7{65u' );
define( 'WP_CACHE_KEY_SALT', 'l{lr<HPN=u3]e.c_PrT0Mno,aSG>*%8fjB[&0;8Ke@ZHv)sV+%U,_OWKY]5DO{xT' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
define('JWT_AUTH_SECRET_KEY', 'teste');
define('JWT_AUTH_CORS_ENABLE', true);
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
