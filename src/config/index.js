import axios from "axios";

const mapToken =
  "pk.eyJ1Ijoic3VtaXQ5ODc1NiIsImEiOiJjbGZzYmZ3czUwNG8zM2dvNHYyMmV6Zmh3In0.HjnsZy-rakWZf43lbOrcEw";

const es_url =
  "https://search-solmarproduction-nyaztvo7rwodtnb5kuekg3looe.eu-west-2.es.amazonaws.com/elasticsearch_index_db_solmar_prod_aws";

const elasticsearch = axios.create({
  baseURL: es_url,
});



export default { mapToken, elasticsearch, es_url };
