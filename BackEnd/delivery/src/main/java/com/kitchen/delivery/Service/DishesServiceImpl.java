package com.kitchen.delivery.Service;

import com.kitchen.delivery.DAO.DishesDao;
import com.kitchen.delivery.Model.Dishes;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DishesServiceImpl implements DishesService{
    @Autowired
    DishesDao dishesDao;

    public DishesServiceImpl(){

    }


    @Override
    public List<Dishes> getDishes() {
        return dishesDao.findAll();
    }

    @Override
    public Dishes addDishes(Dishes dishes) {
        return dishesDao.save(dishes);
    }

    @Override
    public Dishes updateDishes(Dishes dishes) {
        Optional<Dishes> reqDish = dishesDao.findById(dishes.getId());
        if(reqDish.isEmpty()){
            throw new EntityNotFoundException("Notes with id" + dishes.getId() + "Not available");
        }
        Dishes existingDish = reqDish.get();
        existingDish.setDishName(dishes.getDishName());
        existingDish.setPrice(dishes.getPrice());
        existingDish.setVeg(dishes.isVeg());
        existingDish.setCuisine(dishes.getCuisine());
        return dishesDao.save(existingDish);
    }

    public void deleteDish(int id){
        dishesDao.findById(id).ifPresent(dish -> dishesDao.delete(dish));
    }

}
