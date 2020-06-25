package com.hilalergan.cmv.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.hilalergan.cmv.model.Announcement;

@Repository
public interface AnnouncementRepository extends JpaRepository <Announcement, String>  {

}
