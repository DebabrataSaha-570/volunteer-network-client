import React from 'react';

const AdminAddEvent = () => {
    return (
        <>
            <section className="container my-5 p-5">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input placeholder="Event Name" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleEventDescription" class="form-label">Event Description</label>
                        <textarea class="form-control" placeholder="Event Description" id="exampleEventDescription" rows="5"></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="exampleImgUrl" class="form-label">Image URL</label>
                        <input type="password" class="form-control" placeholder="Image URL" id="exampleImgUrl" />
                    </div>

                    <button type="submit" class="btn btn-primary">Add This Event</button>
                </form>
            </section>
        </>
    );
};

export default AdminAddEvent;