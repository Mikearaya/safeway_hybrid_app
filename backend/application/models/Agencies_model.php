<?php 

class Agencies_Model extends MY_Model
{


    function __construct()
    {
        $this->table_name = 'agency';
        $this->primary_key = 'ID';
        parent::__construct();
    }


    
}
 