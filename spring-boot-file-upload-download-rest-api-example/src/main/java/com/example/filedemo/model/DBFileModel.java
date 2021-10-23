package com.example.filedemo.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "files")
public class DBFileModel {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    private String fileName;

    private String downloaduri;

    private String fileType;

    @Lob
    private byte[] data;

    private long size;

    public DBFileModel() {

    }

    public DBFileModel(String id, String fileName, String fileType, byte[] data, long fileSize) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.data = data;
        this.id = id;
        this.size = fileSize;
    }

    public DBFileModel(String fileName, String fileType, byte[] data, long fileSize) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.data = data;
        this.size = fileSize;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public long getSize() {
        return size;
    }

    public void setSize(long size) {
        this.size = size;
    }


}