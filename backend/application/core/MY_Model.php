<?php


class MY_Model extends CI_Model
{

  protected $table_name;
  protected $child_tables =  array();
  protected $primary_key;
  protected $media_location =  array(
    'temp' => 'uploads/media/temp',
    'permanent' => 'uploads/media/permanent',
    'url' => ''
  );


  function __construct()
  {
    $this->media_location[''] = base_url('uploads/media/permanent');
    $this->load->database();
    $this->load->helper('file');
    $this->load->helper('url');
  }


  function get_by_id($id, $language)
  {

    $this->db->where($this->primary_key, $id);
    $result;

    if (is_null($language)) {
      $result_set = $this->db->get($this->table_name);
      $result[$this->table_name] = $result_set->row_array();

      foreach ($this->child_tables as $table => $primary_key) {
        $this->db->where($primary_key, $id);
        $result_set = $this->db->get($table);
        $result[$table] = $result_set->result_array();
      }
    } else {
      $result_set = $this->db->get($this->table_name);
      $result[$this->table_name] = $result_set->row_array();

      foreach ($this->child_tables as $table => $primary_key) {
        $this->db->where($primary_key, $id);
        $result_set = $this->db->get($table);
        $result[$table] = $result_set->result_array();
      }
    }




    $directory = [];

    if (is_dir($this->media_location['permanent'] . '/' . $this->table_name . '/' . $id . "/english")) {
      $directory = $this->getDirectoryContent($this->media_location['permanent'] . '/' . $this->table_name . '/' . $id . "/english");
    }
    $result['videos'] = [];
    $result['audios'] = [];
    $result['image'] = [];
    foreach ($directory as $info) {


      if (!$info->isDot() && !$info->isDir()) {

        $file = $info->getPathname();
        $fileProperty = $this->extract_file_info($info);


        $mime = get_mime_by_extension($info->getFilename());
        if (strstr($mime, "video/")) {
          $result['videos'] = $file;
          $result['videoProperties'][] = $fileProperty;
        } else if (strstr($mime, "image/")) {
          $result['image'] = $file;
          $result['imageProperties'][] = $fileProperty;
        } else if (strstr($mime, "audio/")) {
          $result['audios'] = $file;
          $result['audioProperties'][] = $fileProperty;
        }
      }
    }

    return $result;
  }

  function get_list()
  {



    $result = $this->db->get($this->table_name);
    $result = $result->result_array();

    for ($i = 0; $i < count($result); $i++) {

      if (is_dir($this->media_location['permanent'] . '/' . $this->table_name . '/' . $result[$i]['ID'] . "/english")) {

        $x = $this->getDirectoryContent($this->media_location['permanent'] . '/' . $this->table_name . '/' . $result[$i]['ID'] . "/english");

        foreach ($x as $info) {
          if (!$info->isDot() && !$info->isDir()) {
            $result[$i]['medias'] = $info->getPathname();
          }
        }
      }
    }



    return $result;
  }

  private function extract_file_info($file)
  {



    $filename = $file->getRealPath();


    return array(
      'name' =>  pathinfo($filename)['filename'],
      'type' => '.' . pathinfo($filename)['extension'],
      'size' => $file->getSize(),
      'path' => base_url() . $file->getPathname()
    );
  }




  function add($data)
  {

    if ($data[$this->table_name]) {
      $this->db->insert($this->table_name, $data[$this->table_name]);
    }

    $new_id = $this->db->insert_id();
    if (count($this->child_tables) > 0) {
      foreach ($this->child_tables as $key => $value) {

        if ($data[$key]) {
          for ($i = 0; $i < count($data[$key]); $i++) {
            $data[$key][$i][$value] = $new_id;
          }

          $this->db->insert_batch($key, $data[$key]);
        }
      }
    }
    /* 
    if ($new_id != NULL &&  isset($data['token'])) {

      $oldmask = umask(0);
      if (!is_dir($this->media_location['permanent'] . '/' . $this->table_name . '/' . $new_id)) {
        mkdir($this->media_location['permanent'] . '/' . $this->table_name . '/' . $new_id, 0777, true);
        $this->copyTree($this->media_location['temp'] . '/' . $data['token'] . '/', $this->media_location['permanent'] . '/' . $this->table_name . '/' .  $new_id);
      }

      $oldmask = umask($oldmask);
      return $new_id;
    } else {
      return $new_id;
    } */

    return $new_id;
  }


  function update($id, $data)
  {


    $this->db->where($this->primary_key, $id);
    $this->db->update($this->table_name, $data[$this->table_name]);


    if (count($this->child_tables) > 0) {

      foreach ($this->child_tables as $key => $value) {
        $updated = [];
        $inserted = [];

        $deleted = [];

        foreach ($data['deleted_ids'][$key] as $key2 => $value2) {
          $deleted[] = $value2;
        }

        if ($deleted) {
          $this->db->where_in('ID', $deleted);
          $this->db->delete($key);
        }

        if ($data[$key]) {

          for ($i = 0; $i < count($data[$key]); $i++) {
            $data[$key][$i][$value] = $data[$this->table_name][$this->primary_key];
            if (isset($data[$key][$i][$this->primary_key])) {
              $updated[] = $data[$key][$i];
            } else {
              $inserted[] = $data[$key][$i];
            };
          }

          if ($updated) {
            $this->db->update_batch($key, $updated, $this->primary_key);
          }

          if ($inserted) {
            $this->db->insert_batch($key, $inserted);
          }
        }
      }
    }


    $oldmask = umask(0);
    if (!is_dir($this->media_location['permanent'] . '/' . $this->table_name . '/' . $id)) {
      mkdir($this->media_location['permanent'] . '/' . $this->table_name . '/' . $id, 0777, true);
      $this->copyTree($this->media_location['temp'] . '/' . $data['token'] . '/', $this->media_location['permanent'] . '/' . $this->table_name . '/' .  $id);
    } else {
      $this->copyTree($this->media_location['temp'] . '/' . $data['token'] . '/', $this->media_location['permanent'] . '/' . $this->table_name . '/' .  $id);
    }

    $oldmask = umask($oldmask);
  }



  public function delete($id)
  {


    $deletedIds = [];
    try {

      foreach ($id  as $key => $value) {
        $deletedIds[] = current($value);
      }
      $this->db->where_in($this->primary_key, $deletedIds);
      $this->db->delete($this->table_name);
      return ($this->db->affected_rows() > 0) ? true : false;
    } catch (Exception $e) {
      return false;
    }
  }
  private function copyTree($source, $destination)
  {

    $source = rtrim($source, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR;
    $destination = rtrim($destination, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR;


    if (!is_dir($source) && !is_readable($source)) {
      return false;
    }

    if (!is_dir($destination)) {
      if (!mkdir($destination, 0777, true)) {
        return false;
      }
    }

    $dirIteratorObject = $this->getDirectoryContent($source);

    foreach ($dirIteratorObject as $info) {

      if ($info->isFile()) {
        copy($info->getFileInfo(), $destination . $info->getFilename());
      } elseif (!$info->isDot() && $info->isDir()) {
        $this->copyTree($info->getRealPath(), $destination . $info);
      }
    }
  }

  protected function getDirectoryContent($directory)
  {
    return new DirectoryIterator($directory);
  }
}
