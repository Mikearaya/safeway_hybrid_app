<?php

class Regions extends API
{


    function __construct($config = 'rest')
    {
        $this->model = 'region_model';
        parent::__construct($config);
    }
}
