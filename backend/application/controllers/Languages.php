<?php


class Languages extends API
{


    function __construct($config = 'rest')
    {

        $this->model = 'languages_model';
        parent::__construct($config);
    }
}
