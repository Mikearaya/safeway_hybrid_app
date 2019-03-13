<?php 

class Hospitals_Model extends MY_Model
{


    function __construct()
    {
        $this->table_name = 'hospital';
        $this->primary_key = 'ID';
        parent::__construct();
    }


    
}
 