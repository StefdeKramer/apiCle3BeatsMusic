<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "2407572380-C4HREhGn1PF45ZiiWvY03quX2CLcMmKXNyrRQfI",
    'oauth_access_token_secret' => "fIaOID8vo8cluRegHT1AaqbGUOxTWcjZrQdswnQ0uoTQJ",
    'consumer_key' => "	2CUmGF2ru8S85NGu8uXvT1kII",
    'consumer_secret' => "O0j3BxrxRpdWTk9SoiCpJ1e4wiRIqUzrWAUewNrYgCbeQF33QG"
);

/** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
$url = 'https://api.twitter.com/1.1/blocks/create.json';
$requestMethod = 'GET';

/** POST fields required by the URL above. See relevant docs as above **/
$postfields = array(
    'screen_name' => 'usernameToBlock', 
    'skip_status' => '1'
);

/** Perform a POST request and echo the response **/
$twitter = new TwitterAPIExchange($settings);
echo $twitter->buildOauth($url, $requestMethod)
             ->setPostfields($postfields)
             ->performRequest();

/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/
$url = 'https://api.twitter.com/1.1/followers/ids.json';
$getfield = '?screen_name=J7mbo';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();
