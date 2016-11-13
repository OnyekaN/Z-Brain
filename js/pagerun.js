//pagerun.js
//
//
//
//gqestart
		
		populateMenu($("#main_button .dropdown-menu"), datasets) 
		populateMenu($("#cyan .dropdown-menu"), masks) 
		populateMenu($("#magenta .dropdown-menu"), masks)
		populateMenu($("#green .dropdown-menu"), masks)
		populateMenu($("#yellow .dropdown-menu"), masks) 
		
		var cyanOverlay = $('#cyan_overlay'),
		    magentaOverlay = $('#magenta_overlay'),
		    greenOverlay = $('#green_overlay'),
		    yellowOverlay = $('#yellow_overlay'); 

		var cyanButton = $('#cyan button'),
		    magentaButton = $('#magenta button'),
		    greenButton = $('#green button'),
		    yellowButton = $('#yellow button');
	
		var datasetImg = $('#centerpiece_img'),
		    overlays = $('.overlay');

		var stackLength = 138,
		    sliceNo = 90,
		    offset = 1, 
		    datasetName = datasetImg.attr('name'),
	            activeDataset = cachePreloadDataset(datasetName, sliceNo, stackLength) ;	

		var activeMasks = {

			cyan : { mask:"None", overlay:cyanOverlay,
				 button:cyanButton, slices:[] },
			magenta : { mask:"None", overlay:magentaOverlay, 
					button:magentaButton, slices:[] },
			green : { mask:"None", overlay:greenOverlay, 
					button:greenButton, slices:[] },
			yellow : { mask:"None", overlay:yellowOverlay, 
					button:yellowButton, slices:[] }
		}

		$(".dropdown-menu li a").click(function() {

			var selText = $(this).text()
			$(this).parents('.form-group')
				.find('button[data-toggle="dropdown"]')
				.html(selText+' <span class="caret"></span>') 
		})
	
		$("#main_button li").click(function() {

		  if ( datasetName == $(this).text() )
		    return 
		  datasetName = $(this).text() ;
		  var imgSrc = "Images/"+datasetName+"-"+sliceNo+".jpg"  
		  $("#centerpiece_img").attr("src", imgSrc) 
		  $("#centerpiece_img").attr("name", datasetName)
		  document.getElementById("current")
		      .innerHTML = "Currently Viewing.... <em>"+datasetName+"</em>"
		  activeDataset = cachePreloadDataset(datasetName, sliceNo, stackLength)

		})	
		
		d3.selectAll('.maskButton li a').on('click', function() {

		    var selectedMask = this.text,
		        thisColor = this.parentElement.parentElement.parentElement.id;	
		    if ( selectedMask == activeMasks[thisColor].mask ) 
		      return
		    else if ( selectedMask == 'None' ) {
			activeMasks[thisColor].button[0]
			  .title = '' 
			activeMasks[thisColor].mask = 'None'
			activeMasks[thisColor].overlay[0].src = "Masks/blank.png" 
			activeMasks[thisColor].button[0]
			  .innerHTML = "Select Overlay<span class='caret'></span>"
		    } else {
			activeMasks[thisColor].mask = selectedMask
			activeMasks[thisColor].button[0]
			  .title = buttonLabel(thisColor, selectedMask).full
			activeMasks[thisColor].button[0]
			  .innerHTML = buttonLabel(thisColor, selectedMask).abbrev
		        slice = parseInt(sliceNo)+offset	
			src = "Masks/"+thisColor+"/"+selectedMask+"_slice"
				+maskFormatNum(slice, 3)+".png" 
		 	activeMasks[thisColor].overlay[0].src = src
		        activeMasks[thisColor].slices = 
			preloadMask(selectedMask, thisColor, stackLength)	
		  }
		})

		$("#range").on("mousemove touchmove", function() {

		  if ( sliceNo == this.value )
		    return
		  sliceNo = parseInt(this.value)
		  datasetImg.attr("src", activeDataset[sliceNo].src) 
		  overlays.each(function() {	
		    if ( activeMasks[this.name].mask != "None" ) { 

		      this.src = activeMasks[this.name].slices[sliceNo].src	
		    }
		  })
		})

		d3.selectAll('.opacity-slider input').on('input', function() {
			opacity = Math.sqrt(this.value/100)	
			thisColor = $(this)[0].className
			activeMasks[thisColor].overlay[0].style.opacity = opacity		
		})	
		
		$(document).on('ddblclick', function() {
		  if ( $('#hoverbox').css('display') != 'none') {
			$('#hoverbox').css('display', 'none')
			return
		  }
		  $('#hoverbox').css('display', 'block')  	
		})

