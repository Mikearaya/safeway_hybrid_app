<?php

class News_Model extends MY_Model {
    function __construct() {
        $this->table_name = 'article';
        $this->primary_key = 'ID';
        parent::__construct();
    }

    function get_list()
    {
        $this->db->where('CATAGORY_ID', NULL);
        $result = $this->db->get($this->table_name);
        return $result->result_array();
    }

}
?>