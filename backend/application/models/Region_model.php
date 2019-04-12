<?php


class Region_Model extends MY_Model
{
    function __construct()
    {
        $this->table_name = 'region';
        $this->primary_key = 'ID';
        parent::__construct();
    }
}
