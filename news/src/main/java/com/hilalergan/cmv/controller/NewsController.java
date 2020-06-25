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

import com.hilalergan.cmv.model.News;
import com.hilalergan.cmv.repository.NewsRepository;

@RestController
@RequestMapping("/new")
public class NewsController {

	@Autowired
	NewsRepository newrepository;

	@RequestMapping("/")
	public List<News> getNews() {
		return newrepository.findAll();
	}

	@PostMapping("/")
	public void saveNew(@RequestBody News news) {
		newrepository.save(news);
	}

	@GetMapping("/{id}")
	public News getNew(@PathVariable String id) {
		return newrepository.findById(id).get();
	}
	@DeleteMapping("/{id}")
	public void deleteNew(@PathVariable String id) {
	     newrepository.deleteById(id);
	}
	@PutMapping("/{id}")
	public News updateNew(@RequestBody News newsupdate, @PathVariable String id) {
		return newrepository.findById(id).
				map(news -> {
					news.setTopic(newsupdate.getTopic());
					news.setDetail(newsupdate.getDetail());
				return	newrepository.save(news);
				})
				.orElseGet(() -> {
					return newrepository.save(newsupdate);
				});
	}

}
