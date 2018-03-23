package com.ljl.vuehttp.demo.model;

import com.ljl.vuehttp.core.simple.model.Authority;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "ARTICLE")
public class Article implements Serializable {


    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "article_seq")
    @SequenceGenerator(name = "article_seq", sequenceName = "article_seq", allocationSize = 102)
    private Long id;

    @Column(name = "TITLE", length = 2000)
    @NotNull
    private String title;

    @Column(name = "CONTENT", length = 4000)
    @NotNull

    private String content;



    @Column(name = "CREATE_DATE")
    @Temporal(TemporalType.TIMESTAMP)
    @NotNull
    private Date createDate;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }
}