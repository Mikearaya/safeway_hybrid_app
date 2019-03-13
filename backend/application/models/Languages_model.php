<?php



class Languages_Model extends MY_Model {

    function __construct() {
        parent::__construct();
        $this->table_name = 'language';
        $this->primary_key = 'ID';
    }
}
?>