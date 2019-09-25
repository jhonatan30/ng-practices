import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.scss']
})
export class GitComponent implements OnInit {

  public squashCommitsCode: string = `git reset --soft HEAD~N && git commit`;
  public deleteBranchCode: string = `git branch -d the_local_branch # Delete local branch`;
  public deleteBranchPushCode: string = `git push origin :the_remote_branch # Delete origin branch`;

  constructor() { }

  ngOnInit() {
  }

}
