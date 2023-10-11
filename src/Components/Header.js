import React from 'react'
import { Link } from 'react-router-dom'

 const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to='/' class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="listandkeys" class="nav-link">ListsandKeys</Link>
        </li>
        <li class="nav-item">
          <Link to="classComp" class="nav-link">classComp</Link>
        </li>
        <li class="nav-item">
          <Link to="counterapp" class="nav-link">Counter App</Link>
        </li>
        <li class="nav-item">
          <Link to="lifecyclemethods" class="nav-link">lifeCycleMethods</Link>
        </li>
        <li class="nav-item">
          <Link to="pagination" class="nav-link">Pagination</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
export default Header
