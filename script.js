document.getElementById('crop-form').addEventListener('submit', function (event) {
    event.preventDefault();
    addCrop();
});

document.getElementById('inventory-form').addEventListener('submit', function (event) {
    event.preventDefault();
    addItem();
});

function addCrop() {
    const cropName = document.getElementById('crop-name').value.trim();
    const growthStage = document.getElementById('growth-stage').value;

    if (cropName && growthStage) {
        const cropList = document.getElementById('crop-list');
        const cropItem = document.createElement('div');
        cropItem.textContent = `Crop: ${cropName} | Stage: ${growthStage}`;
        cropList.appendChild(cropItem);

        document.getElementById('crop-form').reset();
    } else {
        alert('Please fill in all fields');
    }
}

function addItem() {
    const itemName = document.getElementById('item-name').value.trim();
    const quantity = document.getElementById('quantity').value;

    if (itemName && quantity) {
        const inventoryList = document.getElementById('inventory-list');
        const inventoryItem = document.createElement('div');
        inventoryItem.textContent = `Item: ${itemName} | Quantity: ${quantity}`;
        inventoryList.appendChild(inventoryItem);

        document.getElementById('inventory-form').reset();
    } else {
        alert('Please fill in all fields');
    }
}
