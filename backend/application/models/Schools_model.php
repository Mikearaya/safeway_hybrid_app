<?php 

class Schools_Model extends MY_Model
{


    function __construct()
    {
        $this->table_name = 'school';
        $this->primary_key = 'ID';
        parent::__construct();
    }


    
}
 