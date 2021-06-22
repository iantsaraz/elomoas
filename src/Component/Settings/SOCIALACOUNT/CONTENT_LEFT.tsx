

function App() {
	return (
		<>
          <div className="middle-sidebar-left">
                    <div className="middle-wrap">
                        <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                            <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-lg">
                                <a href="/Setting" className="d-inline-block mt-2"><i className="ti-arrow-left font-sm text-white"></i></a>
                                <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">Social Network</h4>
                            </div>
                            <div className="card-body p-lg-5 p-4 w-100 border-0">
                                <form action="#">
                                     

                                    <div className="row">
                                        
                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xsss"  >Facebook</label>
                                                <input type="text" name="comment-name" className="form-control"/>
                                            </div>        
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xsss"  >Twitter</label>
                                                <input type="text" name="comment-name" className="form-control"/>
                                            </div>        
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xsss"  >Linkedin</label>
                                                <input type="text" name="comment-name" className="form-control"/>
                                            </div>        
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xsss"  >Instagram</label>
                                                <input type="text" name="comment-name" className="form-control"/>
                                            </div>        
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xsss"  >Flickr</label>
                                                <input type="text" name="comment-name" className="form-control"/>
                                            </div>        
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xsss"  >Github</label>
                                                <input type="text" name="comment-name" className="form-control"/>
                                            </div>        
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xsss"  >Skype</label>
                                                <input type="text" name="comment-name" className="form-control"/>
                                            </div>        
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <label className="mont-font fw-600 font-xsss"  >Google</label>
                                                <input type="text" name="comment-name" className="form-control"/>
                                            </div>        
                                        </div>




                                        <div className="col-lg-12 mb-0 mt-2">
                                            <a href="#" className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block">Save</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- <div className="card w-100 border-0 p-2"></div> --> */}
                    </div>
                </div>
		</>
	);
}

export default App;
