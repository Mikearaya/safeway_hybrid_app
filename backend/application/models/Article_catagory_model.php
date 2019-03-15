<?php


class Article_catagory_model extends MY_Model {
    function __construct() {
        $this->table_name = 'article_catagory';
        $this->primary_key = 'ID';
        parent::__construct();

    }
}
?>