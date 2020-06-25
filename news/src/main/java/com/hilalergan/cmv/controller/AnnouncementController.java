package com.hilalergan.cmv.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hilalergan.cmv.model.Announcement;
import com.hilalergan.cmv.repository.AnnouncementRepository;

@RestController
@RequestMapping("/announcement")
public class AnnouncementController {
	@Autowired
	AnnouncementRepository announcementrepository;

	@RequestMapping("/")
	public List<Announcement> getAnnouncement() {
		return announcementrepository.findAll();
	}

	@PostMapping("/")
	public void saveAnnouncement(@RequestBody Announcement announcement) {
		announcementrepository.save(announcement);
	}

	@GetMapping("/{id}")
	public Announcement getAnnouncement(@PathVariable String id) {
		return announcementrepository.findById(id).get();
	}

	@DeleteMapping("/{id}")
	public void deleteAnnouncement(@PathVariable String id) {
		announcementrepository.deleteById(id);
	}

	@PutMapping("/{id}")
	public Announcement updateAnnouncement(@RequestBody Announcement announcementupdate, @PathVariable String id) {
		return announcementrepository.findById(id).map(announcement -> {
			announcement.setDate(announcementupdate.getDate());
			announcement.setSubject(announcementupdate.getSubject());
			return announcementrepository.save(announcement);
		}).orElseGet(() -> {
			return announcementrepository.save(announcementupdate);
		});
	}

}
