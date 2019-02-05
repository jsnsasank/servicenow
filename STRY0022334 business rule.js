(function executeRule(current, previous /*null when async*/) {

    var deployedTo = current.u_deployed_to;
	var discoveredUser = current.u_discovered_user;
//gs.addInfoMessage("test")

	var gr = new GlideRecord("incident");
	gr.initialize();     
	gr.u_user_id = "3a5771970a0a3c410131b98abb95db0e";
    gr.short_description = "Unknown Desktop Asset detected";
    gr.incident_state = '1';
    gr.assignment_group = getAssignmentGroup();
    gr.u_op_tier_1 =  "Malfunction";
    gr.u_op_tier_2 = "Data Issue";
	gr.u_product_tier_1 = "Hardware";
	//gr.u_product_tier_2 = "u_sub_class";
    //gr.u_product_tier_3 = "Unknown Process"
	gr.u_product_name =  "Unknown Process";
	gr.u_requester_ci = current.sys_id; 
	gr.u_asset_override = true; 
	gr.u_impindpartner = true;
	if(current.u_encryption_state != 'Protection On')
	{
		gr.u_urg_hideadlinerisk = true;
	}
	if(current.u_encryption_state == 'Protection On')
	{
		gr.u_urg_meddeadlinerisk = true;
	}
    gr.u_details = "Unknown Device Details:" + "\n" + "Class:" + current.u_class + "\n" + "Sub-Class:" + current.u_sub_clas + "\n" + "Name:" + current.name  + "\n" + "Serial Number:" + current.serial_number  + "\n" + "Two Letter Functional Extention:" + current.u_2_letter_functional_extensio + "\n" + "Deployed to:" + current.u_deployed_to + "\n" + "Deployed to cable box:" + current.u_cable_box + "\n" + "Discover User:" + current.u_discovered_user + "\n" + "Discovered User string:" + current.u_discovered_user_string + "\n" + "IP Addres:" + current.ip_address + "\n" + "Encryption state:" + current.u_encryption_state + "\n" + "Encryption state date:" + current.u_encryption_state_date;
	var id = gr.insert();
	gs.log("Sanakr logs " + id);
	
	
	var inc_task = new GlideRecord('u_incident_task');
	inc_task.initialize(); 
	//inc_task.sys_class_name = 'incident_task'
    inc_task.u_incref = id;	
	inc_task.u_user_id = "3a5771970a0a3c410131b98abb95db0e";
    inc_task.short_description = "Verify";
    inc_task.incident_state = '1';
    inc_task.assignment_group = getAssignmentGroup();
    inc_task.u_op_tier_1 =  "Malfunction";
    inc_task.u_op_tier_2 = "Data Issue";
	inc_task.u_product_tier_1 = "Hardware";
	//inc_task.u_product_tier_2 = "u_sub_class";
    //inc_task.u_product_tier_3 = "Unknown Process"
	inc_task.u_product_name =  "Unknown Process";
	//inc_task.u_requester_ci = current.sys_id;
	if(current.u_encryption_state != 'Protection On'){
	inc_task.u_priority = '20';
	}
	else{
		inc_task.u_priority = '30';
	}

    inc_task.u_details = "Unknown Device Details:" + "\n" + "Class:" + current.u_class + "\n" + "Sub-Class:" + current.u_sub_clas + "\n" + "Name:" + current.name  + "\n" + "Serial Number:" + current.serial_number  + "\n" + "Two Letter Functional Extention:" + current.u_2_letter_functional_extensio + "\n" + "Deployed to:" + current.u_deployed_to + "\n" + "Deployed to cable box:" + current.u_cable_box + "\n" + "Discover User:" + current.u_discovered_user + "\n" + "Discovered User string:" + current.u_discovered_user_string + "\n" + "IP Addres:" + current.ip_address + "\n" + "Encryption state:" + current.u_encryption_state + "\n" + "Encryption state date:" + current.u_encryption_state_date;
	inc_task.insert();

	
	
	var inc_task1 = new GlideRecord('u_incident_task');
	inc_task1.initialize();  
	//inc_task.sys_class_name = 'incident_task'
    inc_task1.u_incref = id;	
	inc_task1.u_user_id = "3a5771970a0a3c410131b98abb95db0e";
    inc_task1.short_description = "Return";
    inc_task1.incident_state = '1';
    inc_task1.assignment_group = getAssignmentGroup();
    inc_task1.u_op_tier_1 =  "Malfunction";
    inc_task1.u_op_tier_2 = "Data Issue";
	inc_task1.u_product_tier_1 = "Hardware";
	//inc_task1.u_product_tier_2 = "u_sub_class";
    //inc_task1.u_product_tier_3 = "Unknown Process"
	inc_task1.u_product_name =  "Unknown Process";
	//inc_task1.u_requester_ci = current.sys_id;
	if(current.u_encryption_state != 'Protection On'){
	inc_task1.u_priority = '20';
	}
	else{
		inc_task1.u_priority = '30';
	}

    inc_task1.u_details = "Unknown Device Details:" + "\n" + "Class:" + current.u_class + "\n" + "Sub-Class:" + current.u_sub_clas + "\n" + "Name:" + current.name  + "\n" + "Serial Number:" + current.serial_number  + "\n" + "Two Letter Functional Extention:" + current.u_2_letter_functional_extensio + "\n" + "Deployed to:" + current.u_deployed_to + "\n" + "Deployed to cable box:" + current.u_cable_box + "\n" + "Discover User:" + current.u_discovered_user + "\n" + "Discovered User string:" + current.u_discovered_user_string + "\n" + "IP Addres:" + current.ip_address + "\n" + "Encryption state:" + current.u_encryption_state + "\n" + "Encryption state date:" + current.u_encryption_state_date;
	inc_task1.insert();
	


	var inc_task2 = new GlideRecord('u_incident_task');
	inc_task2.initialize(); 
//	inc_task.sys_class_name = 'incident_task'
    inc_task2.u_incref = id;	
	inc_task2.u_user_id = "3a5771970a0a3c410131b98abb95db0e";
    inc_task2.short_description = "Receive";
    inc_task2.incident_state = '1';
    inc_task2.assignment_group = getAssignmentGroup();
    inc_task2.u_op_tier_1 =  "Malfunction";
    inc_task2.u_op_tier_2 = "Data Issue";
	inc_task2.u_product_tier_1 = "Hardware";
	//inc_task2.u_product_tier_2 = "u_sub_class";
    //inc_task2.u_product_tier_3 = "Unknown Process"
	inc_task2.u_product_name =  "Unknown Process";
	//inc_task2.u_requester_ci = current.sys_id;
	if(current.u_encryption_state != 'Protection On'){
	inc_task2.u_priority = '20';
	}
	else{
		inc_task2.u_priority = '30';
	}

    inc_task2.u_details = "Unknown Device Details:" + "\n" + "Class:" + current.u_class + "\n" + "Sub-Class:" + current.u_sub_clas + "\n" + "Name:" + current.name  + "\n" + "Serial Number:" + current.serial_number  + "\n" + "Two Letter Functional Extention:" + current.u_2_letter_functional_extensio + "\n" + "Deployed to:" + current.u_deployed_to + "\n" + "Deployed to cable box:" + current.u_cable_box + "\n" + "Discover User:" + current.u_discovered_user + "\n" + "Discovered User string:" + current.u_discovered_user_string + "\n" + "IP Addres:" + current.ip_address + "\n" + "Encryption state:" + current.u_encryption_state + "\n" + "Encryption state date:" + current.u_encryption_state_date;
	inc_task2.insert();

	
	var inc_task3 = new GlideRecord('u_incident_task');
	inc_task3.initialize(); 
	//inc_task.sys_class_name = 'incident_task'
    inc_task3.u_incref = id;	
	inc_task3.u_user_id = "3a5771970a0a3c410131b98abb95db0e";
    inc_task3.short_description = "Update Status";
    inc_task3.incident_state = '1';
    inc_task3.assignment_group = getAssignmentGroup();
    inc_task3.u_op_tier_1 =  "Malfunction";
    inc_task3.u_op_tier_2 = "Data Issue";
	inc_task3.u_product_tier_1 = "Hardware";
	//inc_task3.u_product_tier_2 = "u_sub_class";
    //inc_task3.u_product_tier_3 = "Unknown Process"
	inc_task3.u_product_name =  "Unknown Process";
	//inc_task3.u_requester_ci = current.sys_id;
	if(current.u_encryption_state != 'Protection On'){
	inc_task3.u_priority = '20';
	}
	else{
		inc_task3.u_priority = '30';
	}

    inc_task3.u_details = "Unknown Device Details:" + "\n" + "Class:" + current.u_class + "\n" + "Sub-Class:" + current.u_sub_clas + "\n" + "Name:" + current.name  + "\n" + "Serial Number:" + current.serial_number  + "\n" + "Two Letter Functional Extention:" + current.u_2_letter_functional_extensio + "\n" + "Deployed to:" + current.u_deployed_to + "\n" + "Deployed to cable box:" + current.u_cable_box + "\n" + "Discover User:" + current.u_discovered_user + "\n" + "Discovered User string:" + current.u_discovered_user_string + "\n" + "IP Addres:" + current.ip_address + "\n" + "Encryption state:" + current.u_encryption_state + "\n" + "Encryption state date:" + current.u_encryption_state_date;
	inc_task3.insert();


    function getAssignmentGroup()
	{
		
		var getUser = new GlideRecord('sys_user');
		if(deployedTo != ''){
			getUser.addQuery('sys_id', deployedTo);
		}
		else{
			getUser.addQuery('sys_id', discoveredUser);
		}
		    getUser.query();
			if(getUser.next())
			{
				var getGroup = new GlideRecord('u_assignment_routing');
				    getGroup.addQuery('u_location', getUser.location);
					getGroup.addQuery('u_product', '029a1bd0db9f630079069ac9db96193e');
					getGroup.query();
					if(getGroup.next())
					{
						var NewGroup = getGroup.u_assignment_group;
						return NewGroup;
					}
				else{
					var sysGroup = gs.getProperty('ntrs.unknown.default.group');
					return sysGroup;
				}
			}
			
		
	}

})(current, previous);
