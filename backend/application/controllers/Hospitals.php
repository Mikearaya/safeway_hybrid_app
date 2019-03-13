<?php

class Hospitals extends API
{
    
    function __construct($config = 'rest')
    { 
        $this->model = "hospitals_model";
        $this->post_validator = "add_hospital";
        $this->put_validator = "update_hospital";
        parent::__construct($config);
    }

   

}
 