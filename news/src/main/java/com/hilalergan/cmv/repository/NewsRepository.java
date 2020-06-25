package com.hilalergan.cmv.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.hilalergan.cmv.model.News;

@Repository
public interface NewsRepository extends JpaRepository<News, String> {

}
