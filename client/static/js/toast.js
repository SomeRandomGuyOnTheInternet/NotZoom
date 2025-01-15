// Function to add a success alert
function toastSuccess(message) {
    var alert = $(`
        <div class="toast align-items-center text-bg-success border-2 border-success-subtle m-2" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `);
    $('#alert-container').empty();
    $('#alert-container').append(alert);
    $(".toast").toast('show');
}

// Function to add an error alert
function toastError(message) {
    var alert = $(`
        <div class="toast align-items-center text-bg-danger border-2 border-danger-subtle m-2" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `);
    $('#alert-container').empty();
    $('#alert-container').append(alert);
    $(".toast").toast('show');
}

// Function to add an info alert
function toastInfo(message) {
    var alert = $(`
        <div class="toast align-items-center text-bg-light border-2 m-2" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                ${message}
                </div>
                <button type="button" class="btn-close btn-close-dark me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `);
    $('#alert-container').empty();
    $('#alert-container').append(alert);
    $(".toast").toast('show');
}