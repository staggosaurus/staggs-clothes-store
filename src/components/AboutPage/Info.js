import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about company"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat id porta nibh venenatis cras. Volutpat maecenas volutpat blandit aliquam etiam erat. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Sed enim ut sem viverra aliquet eget sit amet. Fringilla ut morbi tincidunt augue interdum. Aliquam ut porttitor leo a diam sollicitudin. Justo donec enim diam vulputate. Mi bibendum neque egestas congue quisque. Morbi tristique senectus et netus. Felis bibendum ut tristique et egestas quis ipsum suspendisse.
            </p>
            <p className="text-lead text-muted my-3">
            Cum sociis natoque penatibus et. Vitae congue mauris rhoncus aenean vel elit scelerisque. Senectus et netus et malesuada fames ac turpis egestas maecenas. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Dictum at tempor commodo ullamcorper a lacus. Vulputate odio ut enim blandit volutpat maecenas. Nulla facilisi nullam vehicula ipsum. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Eu volutpat odio facilisis mauris sit. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Tincidunt praesent semper feugiat nibh sed. Sed blandit libero volutpat sed.
            </p>
            <p className="text-lead text-muted my-3">
            Ipsum a arcu cursus vitae. Elit ut aliquam purus sit. Laoreet sit amet cursus sit amet dictum. Tempus imperdiet nulla malesuada pellentesque elit. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Sed enim ut sem viverra aliquet. Arcu non sodales neque sodales ut. Egestas congue quisque egestas diam in. Mi sit amet mauris commodo quis imperdiet massa tincidunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
