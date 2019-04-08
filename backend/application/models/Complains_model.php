
<?php

class Complains_model extends MY_Model
{

    function __construct()
    {

        $this->table_name = 'complains';
        $this->primary_key = 'ID';
        parent::__construct();
    }
}
