<?php

class Complain_Types extends API
{

    function __construct($config = 'rest')
    {
        $this->model = 'complain_type_model';
        $this->post_validator = 'add_complain_type';
        $this->put_validator = 'update_complain_type';
        parent::__construct($config);
    }
}
