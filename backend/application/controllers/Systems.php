<?php



class Systems extends API
{


    function __construct($config = 'rest')
    {

        $this->model = 'system_model';
        parent::__construct($config);
    }


    public function init_GET()
    {

        $result = $this->system_model->initialize();

        $response = "";
        if ($result) {
            $response = "<h1 style='color: green;'> System initialized successfuly </h1>";
        } else {
            $response =  "<h1 style='color:red' > Failed while initializing system, contact system admin </h1>";
        }
        echo  "<div style='text-align: center'> " . $response . "</div>";
    }
}
