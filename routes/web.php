<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/sectors', function () {
    return Inertia::render('sectors');
})->name('sectors');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/careers', function () {
    return Inertia::render('careers');
})->name('careers');

Route::prefix('sectors')->group(function () {
    Route::get('/mine', function () {
        return Inertia::render('sectors/mine');
    })->name('sectors.mine');

    Route::get('/hydraulic', function () {
        return Inertia::render('sectors/hydraulic');
    })->name('sectors.hydraulic');

    Route::get('/urban', function () {
        return Inertia::render('sectors/urban');
    })->name('sectors.urban');

    Route::get('/construction', function () {
        return Inertia::render('sectors/construction');
    })->name('sectors.construction');

    Route::get('/environment', function () {
        return Inertia::render('sectors/environment');
    })->name('sectors.environment');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
