package com.ljl.vuehttp.demo.repository;

import com.ljl.vuehttp.core.simple.model.User;
import com.ljl.vuehttp.demo.model.Article;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface ArticleRepository  extends JpaRepository<Article, Long>, JpaSpecificationExecutor<Article> {
}
