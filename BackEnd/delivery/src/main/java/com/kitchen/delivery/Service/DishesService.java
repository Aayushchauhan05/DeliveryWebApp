package com.kitchen.delivery.Service;

import com.kitchen.delivery.DAO.DishesDao;
import com.kitchen.delivery.Model.Dishes;

import java.util.List;

public interface DishesService {
    public List<Dishes> getDishes();

    public Dishes addDishes(Dishes dishes);

    public Dishes updateDishes(Dishes dishes);
    public void deleteDish(int id);
}
