// 1. CLEAN MANUAL DATABASE
const phoneDatabase = [
    // --- IPHONES (10) ---
    { id: 1, brand: 'iPhone', name: 'iPhone 15 Pro Max', price: 1199, rating: '4.9', image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=500' },
    { id: 2, brand: 'iPhone', name: 'iPhone 15 Pro', price: 999, rating: '4.8', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=500' },
    { id: 3, brand: 'iPhone', name: 'iPhone 15 Plus', price: 899, rating: '4.7', image: 'https://images.unsplash.com/photo-1695048132863-718e24443907?auto=format&fit=crop&q=80&w=500' },
    { id: 4, brand: 'iPhone', name: 'iPhone 15', price: 799, rating: '4.6', image: 'https://images.unsplash.com/photo-1696423602352-789959d12790?auto=format&fit=crop&q=80&w=500' },
    { id: 5, brand: 'iPhone', name: 'iPhone 14 Pro Max', price: 999, rating: '4.8', image: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&q=80&w=500' },
    { id: 6, brand: 'iPhone', name: 'iPhone 14', price: 699, rating: '4.5', image: 'https://images.unsplash.com/photo-1663499827990-047a4f54d30b?auto=format&fit=crop&q=80&w=500' },
    { id: 7, brand: 'iPhone', name: 'iPhone 13', price: 599, rating: '4.5', image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=500' },
    { id: 8, brand: 'iPhone', name: 'iPhone 13 Mini', price: 499, rating: '4.4', image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=500' },
    { id: 9, brand: 'iPhone', name: 'iPhone SE (2022)', price: 429, rating: '4.3', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=500' },
    { id: 10, brand: 'iPhone', name: 'iPhone 12', price: 499, rating: '4.4', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=500' },

    // --- SAMSUNG (10) ---
    { id: 11, brand: 'Samsung', name: 'Galaxy S24 Ultra', price: 1299, rating: '4.9', image: 'https://images.unsplash.com/photo-1707148784305-6a68337bb54a?auto=format&fit=crop&q=80&w=500' },
    { id: 12, brand: 'Samsung', name: 'Galaxy S24+', price: 999, rating: '4.8', image: 'https://images.unsplash.com/photo-1707150116035-236b35391300?auto=format&fit=crop&q=80&w=500' },
    { id: 13, brand: 'Samsung', name: 'Galaxy S24', price: 799, rating: '4.7', image: 'https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?auto=format&fit=crop&q=80&w=500' },
    { id: 14, brand: 'Samsung', name: 'Galaxy Z Fold 5', price: 1799, rating: '4.8', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=500' },
    { id: 15, brand: 'Samsung', name: 'Galaxy Z Flip 5', price: 999, rating: '4.7', image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=500' },
    { id: 16, brand: 'Samsung', name: 'Galaxy S23 FE', price: 599, rating: '4.5', image: 'https://images.unsplash.com/photo-1678911790933-25844881309d?auto=format&fit=crop&q=80&w=500' },
    { id: 17, brand: 'Samsung', name: 'Galaxy A54 5G', price: 449, rating: '4.4', image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=500' },
    { id: 18, brand: 'Samsung', name: 'Galaxy A34', price: 349, rating: '4.3', image: 'https://images.unsplash.com/photo-1551817411-93a555365855?auto=format&fit=crop&q=80&w=500' },
    { id: 19, brand: 'Samsung', name: 'Galaxy S22 Ultra', price: 799, rating: '4.6', image: 'https://images.unsplash.com/photo-1644310972589-643a2099d946?auto=format&fit=crop&q=80&w=500' },
    { id: 20, brand: 'Samsung', name: 'Galaxy M54', price: 399, rating: '4.2', image: 'https://images.unsplash.com/photo-1610945264445-f44fb5782119?auto=format&fit=crop&q=80&w=500' },

    // --- GOOGLE (10) ---
    { id: 21, brand: 'Google', name: 'Pixel 8 Pro', price: 999, rating: '4.8', image: 'https://images.unsplash.com/photo-1696609386386-89d71a62002f?auto=format&fit=crop&q=80&w=500' },
    { id: 22, brand: 'Google', name: 'Pixel 8', price: 699, rating: '4.7', image: 'https://images.unsplash.com/photo-1696609386407-74431e672776?auto=format&fit=crop&q=80&w=500' },
    { id: 23, brand: 'Google', name: 'Pixel 7 Pro', price: 749, rating: '4.6', image: 'https://images.unsplash.com/photo-1675200216738-48f869e5f5f4?auto=format&fit=crop&q=80&w=500' },
    { id: 24, brand: 'Google', name: 'Pixel 7', price: 499, rating: '4.5', image: 'https://images.unsplash.com/photo-1668437813735-86640c499290?auto=format&fit=crop&q=80&w=500' },
    { id: 25, brand: 'Google', name: 'Pixel 7a', price: 449, rating: '4.5', image: 'https://images.unsplash.com/photo-1683533261621-39e235a90d3d?auto=format&fit=crop&q=80&w=500' },
    { id: 26, brand: 'Google', name: 'Pixel 6a', price: 349, rating: '4.4', image: 'https://images.unsplash.com/photo-1658482434516-70e0600d832d?auto=format&fit=crop&q=80&w=500' },
    { id: 27, brand: 'Google', name: 'Pixel Fold', price: 1799, rating: '4.6', image: 'https://images.unsplash.com/photo-1683533261765-b9f07297e59c?auto=format&fit=crop&q=80&w=500' },
    { id: 28, brand: 'Google', name: 'Pixel 6 Pro', price: 549, rating: '4.4', image: 'https://images.unsplash.com/photo-1635443313944-793575971169?auto=format&fit=crop&q=80&w=500' },
    { id: 29, brand: 'Google', name: 'Pixel 5', price: 299, rating: '4.2', image: 'https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?auto=format&fit=crop&q=80&w=500' },
    { id: 30, brand: 'Google', name: 'Pixel 4 XL', price: 199, rating: '4.1', image: 'https://images.unsplash.com/photo-1574750300767-3299b671141b?auto=format&fit=crop&q=80&w=500' }
];
// Overwrites every image in the database with a minimalist B&W placeholder
phoneDatabase.forEach(phone => {
    // This uses a 500x500 grayscale placeholder
    phone.image = 'https://placehold.co/500x500/000000/FFFFFF?text=Product+Image';
});

function renderGallery(products) {
    const container = document.getElementById('product-grid');
    if (!container) return;

    container.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="product-image-box" onclick="window.location.href='product.html?id=${p.id}'">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="brand-tag">${p.brand}</span>
                <h3 class="product-name">${p.name}</h3>
                <div class="rating-stars">
                    <i class="fa-solid fa-star"></i> ${p.rating}
                </div>
                <div class="price-box">
                    <span class="price-amount">$${p.price.toLocaleString()}</span>
                </div>
                
                <div class="card-buttons">
                    <button class="add-to-cart-btn" onclick="addToCart(${p.id}, '${p.name}', ${p.price}, '${p.image}')">
                        Add to Bag
                    </button>
                    <button class="view-product-btn" onclick="window.location.href='product.html?id=${p.id}'">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    const params = new URLSearchParams(window.location.search);
    const brandQuery = params.get('brand');
    const searchQuery = params.get('search');
    
    const isHomepage = window.location.pathname.endsWith('index.html') || 
                       window.location.pathname === '/' || 
                       window.location.pathname.endsWith('/');

    // Clear grid to prevent doubling
    productGrid.innerHTML = '';

    if (isHomepage && !brandQuery && !searchQuery) {
        // HOMEPAGE: 2 per brand
        const featuredProducts = [];
        const targetBrands = ['iPhone', 'Samsung', 'Google'];

        targetBrands.forEach(brand => {
            const brandItems = phoneDatabase
                .filter(p => p.brand === brand)
                .slice(0, 2); 
            featuredProducts.push(...brandItems);
        });
        renderGallery(featuredProducts);
    } else {
        // CATALOG/FILTERED: Show based on query or show all
        let displayProducts = phoneDatabase;
        
        if (brandQuery) {
            displayProducts = phoneDatabase.filter(p => p.brand.toLowerCase() === brandQuery.toLowerCase());
        } else if (searchQuery) {
            displayProducts = phoneDatabase.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        
        renderGallery(displayProducts);
    }

    // Update UI elements
    updateCartUI();
});
// --- 3. SEARCH & FILTER LOGIC ---
function handleLiveSearch(query) {
    const dropdown = document.getElementById('searchDropdown');
    if (!query) {
        dropdown.style.display = 'none';
        return;
    }

    const filtered = phoneDatabase.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.brand.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);

    if (filtered.length > 0) {
        dropdown.innerHTML = filtered.map(p => `
            <div class="dropdown-item" onclick="window.location.href='product.html?id=${p.id}'">
                <img src="${p.image}" alt="${p.name}">
                <div>
                    <div style="font-weight: 600;">${p.name}</div>
                    <div style="font-size: 0.8rem; color: var(--text-secondary);">$${p.price}</div>
                </div>
            </div>
        `).join('');
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

function handleSearchSubmit(e) {
    if (e.key === 'Enter') {
        window.location.href = `catalog.html?search=${e.target.value}`;
    }
}


// --- 5. THE UNIFIED CART ENGINE ---
let cart = JSON.parse(localStorage.getItem('pixelgrid_cart')) || [];
let currentPageQty = 1; // Temporary count for product.html page

function addToCart(productId) {
    const uniqueId = `${productId}-Space Gray-128GB`;
    const existingItem = cart.find(item => item.cartId === uniqueId);

    if (existingItem) {
        existingItem.quantity += 1;
        showToast("Increased quantity in bag!");
    } else {
        const product = phoneDatabase.find(p => p.id === productId);
        if (product) {
            cart.push({ 
                ...product, 
                quantity: 1, 
                cartId: uniqueId,
                specs: { color: 'Space Gray', storage: '128GB', ram: '8GB' } 
            });
            showToast(`✅ Added to bag!`);
        }
    }
    
    localStorage.setItem('pixelgrid_cart', JSON.stringify(cart));
    updateCartUI();
}
// 2. Unified UI Updater
function updateCartUI() {
    const countBadge = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cartItems');
    const totalElement = document.getElementById('cartTotalValue');
    
    // Update nav badge
    if (countBadge) {
        countBadge.innerText = cart.length;
        countBadge.style.display = cart.length > 0 ? 'block' : 'none';
    }

    // Update sidebar items
    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align:center; color:#888; padding: 20px;">Your bag is empty</p>';
            if(totalElement) totalElement.innerText = "$0.00";
        } else {
            let total = 0;
            cartItemsContainer.innerHTML = cart.map((item, index) => {
                total += (item.price * item.quantity);

return `
    <div class="cart-item" style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
        <div class="cart-item-clickable" onclick="goToProduct(${item.id})" style="display: flex; gap: 10px; cursor: pointer; flex: 1;">
            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: contain;">
            <div class="cart-item-info">
                <h4 style="margin: 0; font-size: 0.85rem;">${item.name}</h4>
                <p style="margin: 2px 0; font-size: 0.75rem; color: #888;">
                    ${item.specs ? `${item.specs.color} | ${item.specs.storage} | ${item.specs.ram}` : 'Standard Edition'}
                </p>
                <p style="margin: 2px 0; font-weight: 600; font-size: 0.85rem;">
                    $${item.price}.99 ${item.quantity > 1 ? `<span style="color: var(--accent);">x${item.quantity}</span>` : ''}
                </p>
            </div>
        </div>
        <button class="remove-item" onclick="removeFromCart(${index})" style="color: #ff3b30; border: none; background: none; cursor: pointer;">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    </div>
`;
                
            }).join('');
            if(totalElement) totalElement.innerText = `$${total.toFixed(2)}`;
        }
    }
}

// 3. Helper Functions
function showToast(message, type = "success") {
    const toast = document.getElementById('toastNotification');
    if (!toast) return;
    toast.innerText = message;
    toast.style.background = (type === "warning") ? "#ff9500" : "#1d1d1f";
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('pixelgrid_cart', JSON.stringify(cart));
    updateCartUI();
}

function clearCart() {
    document.getElementById('clearCartModal').classList.add('active');
}

function closeClearModal() {
    document.getElementById('clearCartModal').classList.remove('active');
}

function executeClearCart() {
    cart = [];
    localStorage.setItem('pixelgrid_cart', JSON.stringify(cart));
    updateCartUI();
    closeClearModal();
    showToast("🗑️ Bag cleared");
}

function changePageQty(amount) {
    currentPageQty += amount;
    if (currentPageQty < 1) currentPageQty = 1;
    const qtyDisplay = document.getElementById('pageQty');
    if (qtyDisplay) qtyDisplay.innerText = currentPageQty;
}

function goToProduct(productId) {
    document.body.classList.remove('no-scroll');
    window.location.href = `product.html?id=${productId}`;
}

function filterByPrice(maxPrice) {
    const display = document.getElementById('priceValue');
    if (display) display.innerText = maxPrice;
    const filtered = phoneDatabase.filter(p => p.price <= parseInt(maxPrice));
    renderGallery(filtered);
}

// Track current selections
let currentSelections = {
    color: 'Space Gray',
    storage: '128GB',
    ram: '8GB'
};

function selectChip(element, type) {
    // 1. Remove 'active' class from all siblings and add to clicked chip
    const parent = element.parentElement;
    parent.querySelectorAll('.chip').forEach(chip => chip.classList.remove('active'));
    element.classList.add('active');
    
    // 2. Update our tracking variable
    currentSelections[type] = element.innerText;

    // 3. Price Update Logic
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const product = phoneDatabase.find(p => p.id === productId);

    if (product) {
        let extraCost = 0;
        if (currentSelections.storage === '256GB') extraCost = 100;
        if (currentSelections.storage === '512GB') extraCost = 200;

        // Update the price displayed on the page
        const priceDisplay = document.querySelector('.product-price'); // Ensure your HTML has this class
        if (priceDisplay) {
            priceDisplay.innerText = `$${(product.price + extraCost)}.99`;
        }
    }
}

function handleProductPageAdd() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));

    if (productId) {
        const product = phoneDatabase.find(p => p.id === productId);
        
        // Use the dropdown to get the current storage and surcharge
        const storageDropdown = document.getElementById('storageDropdown');
        const selectedStorage = storageDropdown ? storageDropdown.value : '128GB';
        const surcharge = storageDropdown ? parseInt(storageDropdown.options[storageDropdown.selectedIndex].getAttribute('data-surcharge')) : 0;

        // Use the selected values to make a unique key
        const uniqueId = `${productId}-${currentSelections.color}-${selectedStorage}`;
        const isAlreadyInCart = cart.some(item => item.cartId === uniqueId);

        // Check if THIS SPECIFIC version is already in cart
const existingItem = cart.find(item => item.cartId === uniqueId);

if (existingItem) {
    // Instead of returning and showing a warning, just add the new quantity to the old one
    existingItem.quantity += currentPageQty;
    showToast(`+${currentPageQty} more added to your bag!`);
} else {
    // If it's NOT in the cart, add it as a new item
    cart.push({
        ...product,
        price: product.price + surcharge,
        cartId: uniqueId,
        quantity: currentPageQty,
        specs: { ...currentSelections }
    });
    showToast(`✅ ${product.name} added!`);
}

// Save and refresh as usual
// Save and refresh as usual
        localStorage.setItem('pixelgrid_cart', JSON.stringify(cart));
        updateCartUI();
    } // This closes: if (product)
} // This closes: function handleProductPageAdd()

function handleStorageChange(selectElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const surcharge = parseInt(selectedOption.getAttribute('data-surcharge')) || 0;
    currentSelections.storage = selectElement.value;

    const priceDisplay = document.querySelector('.product-price');
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const product = phoneDatabase.find(p => p.id === productId);

    if (product && priceDisplay) {
        const newPrice = product.price + surcharge;
        priceDisplay.innerText = `$${newPrice}.99`;
    }
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        showToast("⚠️ Your bag is empty!", "warning");
        return;
    }

    // 1. Set the seller's phone number (with country code, no + sign)
    const phoneNumber = "2349015177495"; // REPLACE THIS with the real number

    // 2. Build the header of the message
    let message = "*NEW ORDER FROM PIXELGRID*%0A";
    message += "--------------------------%0A%0A";

    // 3. Loop through cart items and add details
    cart.forEach((item, index) => {
        const itemSpecs = item.specs ? `(${item.specs.color} | ${item.specs.storage})` : "";
        message += `*${index + 1}. ${item.name}*%0A`;
        message += `   Option: ${itemSpecs}%0A`;
        message += `   Qty: ${item.quantity} x $${item.price}.99%0A%0A`;
    });

    // 4. Add the final total
    const total = document.getElementById('cartTotalValue').innerText;
    message += "--------------------------%0A";
    message += `*Grand Total: ${total}*%0A%0A`;
    message += "Please let me know how to proceed with payment and delivery!";

    // 5. Open WhatsApp in a new tab
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.querySelector('.menu-toggle i');
    
    if (navLinks) {
        navLinks.classList.toggle('active');
        
        // Only handle the icon swap here
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.replace('fa-bars', 'fa-xmark');
            // REMOVED: document.body.style.overflow = 'hidden'; 
        } else {
            menuIcon.classList.replace('fa-xmark', 'fa-bars');
            // REMOVED: document.body.style.overflow = 'auto';
        }
    }
}


window.addEventListener('click', (e) => {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuIcon = document.querySelector('.menu-toggle i');

    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !menuToggle.contains(e.target)) {
        
        navLinks.classList.remove('active');
        menuIcon.classList.replace('fa-xmark', 'fa-bars');
        
        // REMOVED: document.body.style.overflow = 'auto'; 
    }
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your message has been sent.');
        contactForm.reset();
    });
}

const whatsappContactForm = document.getElementById('whatsappContactForm');

if (whatsappContactForm) {
    whatsappContactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // 1. Get values from the form
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;

        // 2. Set your phone number (with country code, no + or spaces)
        const myPhoneNumber = "2349015177495"; // REPLACE WITH YOUR NUMBER

        // 3. Construct the message
        const encodedMessage = encodeURIComponent(
            `*New Inquiry from PixelGrid*\n\n` +
            `*Name:* ${name}\n` +
            `*Email:* ${email}\n` +
            `*Message:* ${message}`
        );

        // 4. Redirect to WhatsApp
        const whatsappURL = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    });
}

function filterByBrand(brandName) {
    // Redirects to catalog.html and adds ?brand=Name to the end of the URL
    window.location.href = `catalog.html?brand=${brandName}`;
}

function orderThisOnWhatsApp() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = phoneDatabase.find(p => p.id === productId);

    if (product) {
        const phoneNumber = "2348000000000"; // REPLACE WITH YOUR NUMBER
        const message = encodeURIComponent(
            `*New Order Inquiry*\n\n` +
            `I am interested in the *${product.name}*\n` +
            `*Price:* $${product.price}\n` +
            `*Brand:* ${product.brand}\n\n` +
            `Is this still available?`
        );
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    }
}