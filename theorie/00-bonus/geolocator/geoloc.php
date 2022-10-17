<script>
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  function success(pos) {
    var geolat = pos.coords.latitude;
    var geolong = pos.coords.longitude;
      console.log(geolat);
      console.log(geolong);
      // Passage des valeurs de géolocalisation par cookies.
      document.cookie='lat=' + geolat;
      document.cookie='long=' + geolong;
  }
    function error(err) {
      console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
</script>

<?php 
  // Récupération des valeurs de géolocalisation JS par les cookies.
  //echo $_COOKIE['lat'];
  //echo $_COOKIE['long'];
  $apitestdata = array();
  $jsondata = json_encode($apitestdata);
  $url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" . $_COOKIE['lat'] . "&lon=" . $_COOKIE['long'];
  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json"));
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $jsondata);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0');
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($ch, CURLOPT_ENCODING, 'gzip');
  curl_setopt($ch, CURLOPT_TIMEOUT, 45);
  $response = curl_exec($ch);
  curl_close($ch);
  $elements = json_decode($response, true);

isset($elements['address']['town']) ? $village=$elements['address']['town']:$village=$elements['address']['village'];
?>
<div id="geolocalisation">
    <?php echo "<pre>".print_r($elements)."</pre>";?>
  <p><?php echo "Géolocalisation : ".$elements['address']['road']." - ".$village." - ".$elements['address']['country']; ?></p>
</div>