<?php



class Users_Model extends MY_Model
{


    function __construct()
    {
        $this->table_name = 'user';
        $this->primary_key = 'ID';
        parent::__construct();
    }
}
 
?>