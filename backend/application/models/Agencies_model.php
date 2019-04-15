<?php

class Agencies_Model extends MY_Model
{


    function __construct()
    {
        parent::__construct();
        $this->table_name = 'agency';
        $this->primary_key = 'ID';
        $this->child_tables = array('agency_locale' => 'AGENCY_ID');
    }
}
