package com.example.filedemo.repository;

import com.example.filedemo.model.DBFileModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DBFileRepository extends JpaRepository<DBFileModel, String> {

}