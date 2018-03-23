package com.ljl.vuehttp.demo.repository;

import com.ljl.vuehttp.demo.model.Article;
import com.ljl.vuehttp.demo.model.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface DocumentRepository extends JpaRepository<Document, Long>, JpaSpecificationExecutor<Document> {
}
