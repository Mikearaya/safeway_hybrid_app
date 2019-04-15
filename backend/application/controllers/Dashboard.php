<?php


class Dashboard extends API
{

    function __construct($config = 'rest')
    {

        $this->model = 'dashboard_model';
        parent::__construct($config);
    }


    public function index_GET($id = NULL)
    {
        $result =  $this->dashboard_model->get_statstics();

        $this->response($result, API::HTTP_OK);
    }
}
