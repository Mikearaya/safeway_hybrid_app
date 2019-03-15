
<?php

class Complain_type_Model extends MY_Model
{

    function __construct()
    {
        $this->table_name = 'complain_type';
        $this->primary_key = 'ID';
        parent::__construct();
    }
}
