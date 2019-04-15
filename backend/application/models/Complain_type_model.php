<?php

class Complain_type_Model extends MY_Model
{

    function __construct()
    {
        parent::__construct();
        $this->table_name = 'complain_type';
        $this->primary_key = 'ID';

        $this->child_tables = array('complain_type_locale' => 'TYPE_ID');
    }
}
