<?php

class  Users extends API 
{

    function __construct($config = 'rest')
    {

        $this->model = 'users_model';
        parent::__construct($config);
    }

    
}
 