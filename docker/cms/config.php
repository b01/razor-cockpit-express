<?php

$configs = [
  'session.name' => 'cockpit',
  'database' => [
    'server'  => getenv('COCKPIT_DATABASE_SERVER'),
    'options' => ['db' => getenv('COCKPIT_DATABASE_NAME')]
  ],
];

if (file_exists('/var/www/html/config/uuidgen-out.txt')){
  $configs['sec-key'] = file_get_contents('/var/www/html/config/uuidgen-out.txt');
}

if (!empty(getenv('COCKPIT_I18N'))){
  $configs['i18n'] = getenv('COCKPIT_I18N');
}

if (!empty(getenv('COCKPIT_MAILER_FROM'))){
  $configs['mailer'] = [
      "from"      => getenv('COCKPIT_MAILER_FROM'),
      "transport" => getenv('COCKPIT_MAILER_TRANSPORT'),
      "host"      => getenv('COCKPIT_MAILER_HOST'),
      "user"      => getenv('COCKPIT_MAILER_USER'),
      "password"  => getenv('COCKPIT_MAILER_PASSWORD'),
      "port"      => getenv('COCKPIT_MAILER_PORT'),
      "auth"      => getenv('COCKPIT_MAILER_AUTH'),
      "encryption"=> getenv('COCKPIT_MAILER_ENCRYPTION')
  ];
}

return $configs;