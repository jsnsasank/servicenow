(function executeRule(current, previous /*null when async*/) {

	var gr = new GlideRecord("incident");
	gr.initialize();     
	gr.u_user_id = "3a5771970a0a3c410131b98abb95db0e";
    gr.short_description = "Unknown Desktop Asset detected";
    gr.incident_state = '1';
// Assignment Group (assignment_group):  create a function to assign.  See function requirements below.
    gr.u_op_tier_1 =  "Malfunction";
    gr.u_op_tier_2 = "Data Issue";
	gr.u_product_tier_1 = "Hardware";
	//gr.u_product_tier_2 = "u_sub_class";
    //gr.u_product_tier_3 = "Unknown Process"
	gr.u_product_name =  "Unknown Process";
	gr.u_requester_ci = current.sys_id; 
	gr.u_asset_override = true; 
	gr.u_impindpartner = true;
    //gr.u_urg_hideadlinerisk): true ->  If u_encryption_state != "Protection On"
   //gr.u_urg_meddeadlinerisk): true ->  If u_encryption_state == "Protection On"
    gr.u_details = "Unknown Device Details:" + "\n" + "Class:" + current.u_class + "\n" + "Sub-Class:" + current.u_sub_clas + "\n" + "Name:" + current.name  + "\n" + "Serial Number:" + current.serial_number  + "\n" + "Two Letter Functional Extention:" + current.u_2_letter_functional_extensio + "\n" + "Deployed to:" + current.u_deployed_to + "\n" + "Deployed to cable box:" + current.u_cable_box + "\n" + "Discover User:" + current.u_discovered_user + "\n" + "Discovered User string:" + current.u_discovered_user_string + "\n" + "IP Addres:" + current.ip_address + "\n" + "Encryption state:" + current.u_encryption_state + "\n" + "Encryption state date:" + current.u_encryption_state_date;
	gr.insert();
	
	
	var inc_task = new GlideRecord('incident_task');
	inc_task.initialize();     
	inc_task.u_user_id = "3a5771970a0a3c410131b98abb95db0e";
    inc_task.short_description = "Unknown Desktop Asset detected";
    inc_task.incident_state = '1';
// Assignment Group (assignment_group):  create a function to assign.  See function requirements below.
    inc_task.u_op_tier_1 =  "Malfunction";
    inc_task.u_op_tier_2 = "Data Issue";
	inc_task.u_product_tier_1 = "Hardware";
	//inc_task.u_product_tier_2 = "u_sub_class";
    //inc_task.u_product_tier_3 = "Unknown Process"
	inc_task.u_product_name =  "Unknown Process";
	inc_task.u_requester_ci = current.sys_id; 
	inc_task.u_asset_override = true; 
	inc_task.u_impindpartner = true;
    //inc_task.u_urg_hideadlinerisk): true ->  If u_encryption_state != "Protection On"
   //inc_task.u_urg_meddeadlinerisk): true ->  If u_encryption_state == "Protection On"
    inc_task.u_details = "Unknown Device Details:" + "\n" + "Class:" + current.u_class + "\n" + "Sub-Class:" + current.u_sub_clas + "\n" + "Name:" + current.name  + "\n" + "Serial Number:" + current.serial_number  + "\n" + "Two Letter Functional Extention:" + current.u_2_letter_functional_extensio + "\n" + "Deployed to:" + current.u_deployed_to + "\n" + "Deployed to cable box:" + current.u_cable_box + "\n" + "Discover User:" + current.u_discovered_user + "\n" + "Discovered User string:" + current.u_discovered_user_string + "\n" + "IP Addres:" + current.ip_address + "\n" + "Encryption state:" + current.u_encryption_state + "\n" + "Encryption state date:" + current.u_encryption_state_date;
	gr.insert();

	




	




})(current, previous);